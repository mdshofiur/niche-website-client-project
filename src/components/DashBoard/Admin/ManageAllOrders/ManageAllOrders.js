import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
     
    const [order,serorder] = useState([])
    const [approve,setapprove] = useState(['pending'])
   
    useEffect(() => {
        fetch("http://localhost:5000/singleorder")
        .then(res => res.json())
        .then(data =>serorder(data))
    },[approve])




    const HandleDetele = id => {
      const proceed = window.confirm("Are Sure to Delete?")
      if(proceed){
        const url = `http://localhost:5000/singleorder/${id}`;
        fetch(url, {
         method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
               const remain = order.filter(service => service._id !== id);
               serorder(remain)
            }
        })
      }
    }

    

    const HandleUpdate = (id) => {
      fetch(`http://localhost:5000/singleorder/${id}`,{
        method: 'PUT',
      })
      .then(res => res.json()
      .then( data => {
        if(data.modifiedCount > 0) {
          alert('Updated Complete')
          setapprove("shipped")
      }
        
      }))
    }



    return (

        <div className="container">
      <h2 className="pt-5 pb-3 text-info">My All Orders</h2>
       <table className="table">
     <thead>
       <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Data</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
       </tr>
      </thead>

      {
          order.map((order,Index) =><tbody key={order._id}>
            <tr>
            <th scope="row">{Index}</th>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.time}</td>
            <td><button onClick={()=> HandleUpdate(order._id)}className="btn btn-primary">{order.status}</button></td>
            <td><button  onClick={()=> HandleDetele(order._id)} className="btn btn-danger">Delete</button></td>
            </tr>
           </tbody>)
      }
</table>
 </div>
    );
};

export default ManageAllOrders;