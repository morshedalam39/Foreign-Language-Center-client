import React, { useEffect, useState } from "react";

const PopularClasses = () => {
  const [classes, setClasses] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/popularClass")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div className="mt-12">
        <h1 className=" text-4xl font-semibold leading-none text-black text-center">Our Popular Classes</h1>
        <hr className="w-60 mt-2 border-[3px] mx-auto border-stone-600" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8 mt-8">
        {classes?.map((cls) => (
          <div key={cls._id} className="card w-full bg-gray-200 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={cls.image}
                alt="Shoes"
                className="rounded-xl h-52 w-full transition-transform duration-300 transform hover:scale-150"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Name: {cls.className}</h2>
              <p className=" font-medium text-base">
                Instructor: {cls.instructorName}
              </p>
              <p className=" font-medium text-base">Enroll: {cls.enroll}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
