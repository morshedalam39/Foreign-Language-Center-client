import React from 'react';
import useAllClass from '../../../hooks/useAllClass';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const {data, refetch}=useAllClass()
    console.log(data);

    const handelFeedback = async (p) => {
        const { value: message } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Feedback',
            inputPlaceholder: 'Type your feedback here...',
            inputAttributes: {
                'aria-label': 'Type your feedback here'
            },
            showCancelButton: true
        })

        if (message) {
            fetch(`http://localhost:5000/singleClass/${p._id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ feedback: message })
            })
                .then(res => res.json())
                .then(data=>{
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'successfully send feedback',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    refetch()
                })
        }
    }

    const stateApprove =(p)=>{
        const status={status:"approve"}

        fetch(`http://localhost:5000/singleClass/${p._id}`,
        {
            method:'PUT',
            headers:{'content-type' : 'application/json'},
            body: JSON.stringify(status),
          })
          .then(res => res.json())
          .then(data=>{
              if(data.modifiedCount){
                  refetch();
                  Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'success',
                      showConfirmButton: false,
                      timer: 1500
                  })
              }
          });
        
    }
    const stateReject =(p)=>{
        const status={status:"denied"}
        fetch(`http://localhost:5000/singleClass/${p._id}`,
        {
            method:'PUT',
            headers:{'content-type' : 'application/json'},
            body: JSON.stringify(status),
          })
          .then(res => res.json())
          .then(data=>{
              if(data.modifiedCount){
                  refetch();
                  Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'success',
                      showConfirmButton: false,
                      timer: 1500
                  })
              }
          });
        
    }
    return (
        <div className='w-10\12 mx-auto'>
            <h1 className="font-bold text-4xl text-center">Manage  Classes</h1>
      <hr className="w-28 mt-2 border-[3px] mx-auto border-stone-600" />
         <div className="overflow-x-auto ml-5 mt-8">
  <table className="table ">
    <thead className="bg-stone-600 text-white">
        
      <tr>
        <th>#</th> 
        <th>Picture</th> 
        <th>Instructor Name</th> 
        <th>Class Name</th> 
        <th>Instructor Email</th> 
        <th>Available Seat</th> 
        <th>Price</th> 
        <th>State</th>
        <th>State</th>
        <th>State</th>
        <th>Feedback</th>
      </tr>
    </thead> 
    <tbody>
    {data?.map((cls, index) => 
                <tr key={cls._id}>
                <th>{index +1}</th> 
                <td>
                <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={cls.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    </td> 
                <td>{cls.instructorName}</td> 
                <td>{cls.className}</td> 
                <td>{cls.instructorEmail}</td> 
                <td>{cls.availableSeats}</td> 
                <td>${cls.price}</td> 
                <td><button className={`btn btn-xs ${cls.status === "approve" && "btn-warning"} ${cls.status === "denied" && "btn-error"} ${cls.status === "pending" && "btn-secondary"}`}>{cls.status}</button></td> 
                <td><button className="btn btn-info btn-sm" onClick={()=>stateApprove(cls)} disabled={cls.status === "approve" || cls.status === "denied"}> Approve</button></td> 
                <td><button className="btn btn-error btn-sm"  onClick={()=>stateReject(cls)} disabled={cls.status === "approve" || cls.status === "denied"}>Reject</button></td> 
                <td><button className="btn btn-warning btn-sm"  disabled={cls.status === "pending"} onClick={()=> handelFeedback(cls)} >Feedback</button></td> 
        
              </tr>
            )}


      

    </tbody> 

  </table>
</div>
        </div>
    );
};

export default ManageClasses;