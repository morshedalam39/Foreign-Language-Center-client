import React from "react";
import useClass from "../../../hooks/useClass";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyClass = () => {
  const { data } = useClass();


  const feedback = cls =>{
    Swal.fire(
        'FeedBack!',
        cls,
        ''
      )
  }
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="font-bold text-4xl text-center">My  Classes</h1>
      <hr className="w-28 mt-2 border-[3px] mx-auto border-stone-600" />
      <div className="overflow-x-auto mt-8">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead >
            <tr className="bg-stone-600 text-white rounded-xl">
              <td>#</td >
              <td>Class Name</td>
              <td>Status</td>
              <td>Total Enroled</td>
              <td>Feedback</td>
              <td>Update</td>
            </tr>
          </thead>
          <tbody>
            {data?.map((cls, index) => 
                <tr key={cls._id}>
              <td>{index + 1}</td>
              <td>{cls.className}</td>
              <td><button className={`btn  btn-xs ${cls.status === "denied" && "btn-error"} ${cls.status === "approve" && "btn-success"} ${cls.status === "pending" && "btn-warning"}`}>{cls.status}</button></td>
              <td>{cls.enroll}</td>
              <td><button onClick={()=>feedback(cls.feedback.length === 0 ? "Admin has not sent any feedback" : cls.feedback)} className=" btn btn-success  btn-sm">Feedback</button></td>
              <td>
                <Link to={`/dashboard/updateMyClass/${cls._id}`}>
                <button  className="btn btn-warning btn-sm">Update</button>
                </Link>
               </td>
            </tr>
            )}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
