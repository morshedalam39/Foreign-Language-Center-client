import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/axiosSecure";

const SocialLogin = () => {
    const {signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axios= useAxiosSecure()

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedInUser = result.user;
                console.log('user.....', loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, role:'student', image:loggedInUser.photoURL
 }

                
                fetch('https://foreign-language-center-client.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                      axios
                      .post(`https://foreign-language-center-client.vercel.app/jwt`, { email: result.user.email })
                      .then((response) => {localStorage.setItem("axcess_token", response.data)
                    
                      Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Login Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                      navigate(from, { replace: true });
                    })
                    })
            })
    }
  return (
    <>
      <div
        onClick={handleGoogleSignIn}
        className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
      >
        <FaGoogle size={32} />

        <p>Continue with Google</p>
      </div>
    </>
  );
};

export default SocialLogin;
