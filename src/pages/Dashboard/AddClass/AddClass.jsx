import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';


const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddClass = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
   
    // Add your logic to handle form submission here

    const image =data.classImage[0];
      const formData = new FormData();
      formData.append("image", image);

      fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgResponse) => {
          if (imgResponse.success) {
            const imgURL = imgResponse.data.display_url;
            const {availableSeats, className, instructorEmail, instructorName,price} = data;
            const newItem = {availableSeats, className, instructorEmail, instructorName, price: parseFloat(price), image:imgURL, enroll: 0,
              status: 'pending',
              feedback: ''}
            fetch('http://localhost:5000/class', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(newItem)
          })
              .then(res => res.json())
              .then(data => {
              
                Swal.fire({
                  position: 'top-center',
                  icon: 'success',
                  title: 'Add Class successfully.',
                  showConfirmButton: false,
                  timer: 1500
              });
              })
          }

        });
    };
  const {user}=useAuth();
  

  return (
<div className='md:w-11/12 md:mx-auto'>
    <h1 className='text-center font-bold text-lg'>Please Add Class</h1>
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

      <div className="w-full md:w-1/2 px-4 mb-4">
        <label htmlFor="classImage" className="block mb-2 font-bold">
          Class Image
        </label>
        <input
          {...register('classImage', { required: 'Class Image is required' })}
          type="file"
          id="classImage"
          className="w-full"
        />
        {errors.classImage && (
          <span className="text-red-500">{errors.classImage.message}</span>
        )}
      </div>

      {/* <div className="w-full md:w-1/2 px-4 mb-4">
        <label htmlFor="instructorName" className="block mb-2 font-bold">
          Instructor Name
        </label>
        <input
          {...register('instructorName')}
          name='instructorName'
          value={user?.displayName}
          type="text"
          id="instructorName"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
       
      </div>

      <div className="w-full md:w-1/2 px-4 mb-4">
        <label htmlFor="instructorEmail" className="block mb-2 font-bold">
          Instructor Email
        </label>
        <input
          {...register('instructorEmail')}
          name='instructorEmail'
          value={user?.email}
          type="email"
          id="instructorEmail"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
       
      </div> */}

<div className="w-full md:w-1/2 px-4 mb-4">
  <label htmlFor="instructorName" className="block mb-2 font-bold">
    Instructor Name
  </label>
  <input
    {...register('instructorName', { required: true })}
    name="instructorName"
    value={user?.displayName}
    type="text"
    id="instructorName"
    className="w-full px-3 py-2 border border-gray-300 rounded-md"
    required
  />
</div>

<div className="w-full md:w-1/2 px-4 mb-4">
  <label htmlFor="instructorEmail" className="block mb-2 font-bold">
    Instructor Email
  </label>
  <input
    {...register('instructorEmail', { required: true })}
    name="instructorEmail"
    value={user?.email}
    type="email"
    id="instructorEmail"
    className="w-full px-3 py-2 border border-gray-300 rounded-md"
    required
  />
</div>


      <div className="w-full md:w-1/2 px-4 mb-4">
        <label htmlFor="availableSeats" className="block mb-2 font-bold">
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
          type="number"
          id="availableSeats"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        {errors.availableSeats && (
          <span className="text-red-500">
            {errors.availableSeats.message}
          </span>
        )}
      </div>

      <div className="w-full md:w-1/2 px-4 mb-4">
        <label htmlFor="price" className="block mb-2 font-bold">
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
          type="number"
          id="price"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        {errors.price && (
          <span className="text-red-500">{errors.price.message}</span>
        )}
      </div>
    </div>

    <div className='text-center mt-6'>
      <button
        type="submit"
        className="px-4 py-2 font-bold text-white  bg-blue-500 rounded hover:bg-blue-600"
      >
        Add Class
      </button>
    </div>
    
  </form>
</div>
);
};

export default AddClass;
