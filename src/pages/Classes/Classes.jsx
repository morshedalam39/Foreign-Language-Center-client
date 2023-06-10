import React, { useEffect, useState } from "react";
import SetRole from "../../hooks/SetRole";

const Classes = () => {
  const [classes, setClasses] = useState();
  const {data}=SetRole()
  console.log(data);
  useEffect(() => {
    fetch("http://localhost:5000/approveClass")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  console.log(classes);
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
             
              <button  className="btn btn-warning btn-sm hover:bg-amber-600" disabled={data?.role === "instractor" || data.role === "admin" || +cls?.availableSeats === 0} >Select</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;
