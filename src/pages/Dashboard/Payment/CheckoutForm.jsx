import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/axiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ data }) => {
  const stripe = useStripe();
  const { user } = useAuth();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const navigate=useNavigate()
  const {
    price,
    classId,
    className,
    enroll,
    instructorEmail,
    payment,
    studentEmail,
    studentName,
    _id,
    availableSeats,
  } = data;
  console.log(data);

  const axios = useAxiosSecure();

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: +price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  console.log(clientSecret);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log('payment method', paymentMethod)
      setProcessing(true);

      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || "unknown",
              name: user?.displayName || "anonymous",
            },
          },
        });

      if (confirmError) {
        console.log(confirmError);
      } else {
        console.log("payment intent", paymentIntent);
        setProcessing(false);
        if (paymentIntent.status === "succeeded") {
          setTransactionId(paymentIntent.id);
          // save payment information to the server
          axios
            .put(`/singleClass/${classId}`, {
              availableSeats: availableSeats - 1,
              enroll: enroll + 1,
            })
            .then((res) => {
              axios
                .put(`/singleSelect/${_id}`, { payment: true })
                .then((res) => {
                  axios
                    .post(`/paymentHistory`, {
                      amount: paymentIntent.amount / 100,
                      transactionId: paymentIntent.id,
                      email: user?.email,
                      className:className,
                      studentName:studentName,

                    })
                    .then((res) => {
                      Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Payment successfully",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                      navigate('/');

                    });
                });
            });
        }
      }
    }
  };

  return (
    <>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500">
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
