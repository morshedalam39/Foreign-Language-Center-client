import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const Instructors = () => {
  const [instructor, setInstructor] = useState();
  const { user } = useAuth();
//   console.log(user);

  useEffect(() => {
    fetch("http://localhost:5000/instructor")
      .then((res) => res.json())
      .then((data) => setInstructor(data));
  }, []);
//   console.log(instructor);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6">
      {instructor?.map((i) => (
        <div key={i._id} className="card w-full bg-base-100 shadow-xl">
          <figure className="px-5 pt-5">
            <img
            
              src={i.image}
              alt="Shoes"
              className="rounded-full w-64 h-64"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Name: {i?.name}</h2>
            <p className="font-semibold text-base" >Email: {i?.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructors;
