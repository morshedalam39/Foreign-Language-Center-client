import React, { useEffect, useState } from "react";
import SetRole from "../../hooks/SetRole";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Classes = () => {
  const [classes, setClasses] = useState();
  const {data}=SetRole()
  const {user}=useAuth()
  const navigate= useNavigate()
  // console.log(data);
  useEffect(() => {
    fetch("http://localhost:5000/approveClass")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  // console.log(classes);
  const handelSelect = cls =>{

    if(!user){
      Swal.fire({
        title: 'Login Please',
        text: "If You want to selected Class you need to Login",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Okay'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        }
      })
    }

    const classData={

      classId: cls._id,
      className: cls.className,
      classImage: cls.image,
      studentName: user?.displayName,
      studentEmail: user?.email,
      instructorEmail: cls.instructorEmail,
      availableSeats: cls.availableSeats,
      price: parseFloat(cls.price) ,
      payment: false
    }
// console.log(classData);

fetch('http://localhost:5000/selectedClass', {
  method: 'POST',
  headers: {
      'content-type': 'application/json'
  },
  body: JSON.stringify(classData)
})
  .then(res => res.json())
  .then(data => {
  
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Selected Class Successfully.',
      showConfirmButton: false,
      timer: 1500
  });
  })

  }
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6">
      {classes?.map((cls) => (
        <div key={cls._id} className={`card w-full ${+cls?.availableSeats === 0 ? 'bg-red-400' :  'bg-base-100' } shadow-xl`}>
          <figure>
            <img className="h-60 w-full"
              src={cls.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             Name:{cls.className}
            </h2>
            <p className=" font-medium text-base">Instructor: {cls.instructorName}</p>
            <p className=" font-medium text-base">Seats: {cls.availableSeats}</p>
            <p className=" font-medium text-base">Course fee: ${cls.price}</p>
            <div className="card-actions justify-end">
             
              <button onClick={()=>handelSelect(cls)} className="btn btn-warning btn-sm hover:bg-amber-600" disabled={data?.role === "instractor" || data.role === "admin" || +cls?.availableSeats === 0} >Select</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;
