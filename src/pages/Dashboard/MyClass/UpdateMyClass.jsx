import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateMyClass = () => {
    const data =useLoaderData();
    console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto mt-10">
    <div className="flex flex-wrap -mx-4">
    <div className="w-full md:w-1/2 px-4 mb-4">
        <label htmlFor="className" className="block mb-2 font-bold">
          Class Name
        </label>
        <input
          {...register('className', { required: 'Class Name is required' })}
          type="text"
          id="className"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        {errors.className && (
          <span className="text-red-500">{errors.className.message}</span>
        )}
      </div>
      
        </div>
       </form>
        </div>
    );
};

export default UpdateMyClass;