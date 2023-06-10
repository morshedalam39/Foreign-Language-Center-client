import React from "react";
import useSelectedClass from "../../../hooks/useSelectedClass";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SelectedClasses = () => {
  const { data, refetch } = useSelectedClass();

  const handelDelete = (cls) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selectedClass/${cls._id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Deleted Class Successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };
  return (
    <div className="w-10/12 mx-auto">
      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr>
              <th>#</th>
              <th>Picture</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((cls, index) => (
              <tr key={cls._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={cls.classImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>

                <td>{cls.className}</td>

                <td>${cls.price}</td>
                <td>
                  <button
                    onClick={() => handelDelete(cls)}
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to='/dashboard/payment'>
                  <button className="btn btn-success btn-sm">Pay</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;
