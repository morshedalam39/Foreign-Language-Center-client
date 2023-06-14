import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateMyClass = () => {
  const data = useLoaderData();
  console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (d) => {
    console.log(d);
    const {className, availableSeats, price}=d
    const update= {className, availableSeats, price};
    fetch(`https://foreign-language-center-client.vercel.app/singleClass/${data._id}`,
    {
        method:'PUT',
        headers:{'content-type' : 'application/json'},
        body: JSON.stringify(update),
      })
      .then(res => res.json())
      .then(data=>{
          if(data.modifiedCount){
              
              Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Update successfully',
                  showConfirmButton: false,
                  timer: 1500
              })
          }
      });
  };

  return (
    <div className='w-1/2 mx-auto'>
      <h1 className='text-center font-bold text-lg'>Update Class</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full mx-auto mt-10'>
        <div className='flex flex-wrap -mx-4'>
          <div className='w-full px-4 mb-4'>
            <label htmlFor='className' className='block mb-2 font-bold'>
              Class Name
            </label>
            <input
              {...register('className', { required: 'Class Name is required' })}
              defaultValue={data.className}
              type='text'
              id='className'
              className='w-full px-3 py-2 border border-gray-300 rounded-md'
            />
            {errors.className && (
              <span className='text-red-500'>{errors.className.message}</span>
            )}
          </div>
        </div>

        <div className='flex flex-wrap -mx-4'>
          <div className='w-full px-4 mb-4'>
            <label htmlFor='availableSeats' className='block mb-2 font-bold'>
              Available Seats (10-30)
            </label>
            <input
              {...register('availableSeats', {
                required: 'Available Seats is required',
                min: {
                  value: 10,
                  message: 'Minimum 10 seats required',
                },
                max: {
                  value: 30,
                  message: 'Maximum 30 seats allowed',
                },
              })}
              defaultValue={data.availableSeats
              }
              type='number'
              id='availableSeats'
              className='w-full px-3 py-2 border border-gray-300 rounded-md'
            />
            {errors.availableSeats && (
              <span className='text-red-500'>
                {errors.availableSeats.message}
              </span>
            )}
          </div>
        </div>

        <div className='flex flex-wrap -mx-4'>
          <div className='w-full px-4 mb-4'>
            <label htmlFor='price' className='block mb-2 font-bold'>
              Price
            </label>
            <input
              {...register('price', {
                required: 'Price is required',
                min: {
                  value: 1,
                  message: 'Price must be greater than zero',
                },
              })}
              defaultValue={data.price}
              type='number'
              id='price'
              className='w-full px-3 py-2 border border-gray-300 rounded-md'
            />
            {errors.price && (
              <span className='text-red-500'>{errors.price.message}</span>
            )}
          </div>
        </div>

        <div className='text-center mt-6'>
          <button
            type='submit'
            className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600'
          >
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMyClass;
