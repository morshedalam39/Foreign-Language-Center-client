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
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <td>#</td>
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
              <td><button className="btn btn-warning btn-xs">{cls.status}</button></td>
              <td>{cls.enroll}</td>
              <td><button onClick={()=>feedback(cls.feedback.length === 0 ? "Admin has not sent any feedback" : cls.feedback)} className="btn btn-info  btn-sm">Feedback</button></td>
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
