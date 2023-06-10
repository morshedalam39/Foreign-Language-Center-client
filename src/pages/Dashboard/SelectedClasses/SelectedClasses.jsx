import React from 'react';
import useSelectedClass from '../../../hooks/useSelectedClass';

const SelectedClasses = () => {
    const {data}=useSelectedClass()
    console.log(data);
    return (
        <div className='w-10/12 mx-auto'>
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
   {data?.map((cls, index) => 
               <tr key={cls._id}>
               <th>{index +1}</th> 
               <td>
               <div className="avatar">
                     <div className="mask mask-squircle w-12 h-12">
                       <img src={cls.classImage} alt="Avatar Tailwind CSS Component" />
                     </div>
                   </div>
                   </td> 
            
               <td>{cls.className}</td> 
 
               <td>${cls.price}</td> 
               <td><button className="btn btn-error btn-sm">Delete</button></td>
               <td><button className="btn btn-success btn-sm">Pay</button></td>

       
             </tr>
           )}


     

   </tbody> 

 </table>
</div>
       </div>
    );
};

export default SelectedClasses;