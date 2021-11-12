import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './SingleOrder.css';
import axios from 'axios';
import useAuth from '../../Hook/useAuth';
import Navbar from '../Navbar/Navbar';


const SingleOrder = () => {

    const { serviceId } = useParams();
    const [service,setservice] = useState({});
    const {user} = useAuth();

    useEffect(()=>{
        fetch(`http://localhost:5000/product/${serviceId}`)
        .then(res => res.json())
        .then(data => setservice(data) )
    },[serviceId])


      const { register, handleSubmit,reset} = useForm();
      const onSubmit = data =>{
        data.status = "pending";
        data.LogEmail = user?.email;
        data.time = new Date().toLocaleDateString();
        axios.post('http://localhost:5000/singleorder',data)
        .then(res => {
           if(res.data.insertedId) {
               alert("Sucessfully added")
               reset();
           }
          })
     }



    return (
      
        <div> 
        <Navbar></Navbar>
     <div className="container">
     <div className="order_form">
     <h2 className="title-sub">Buy Now</h2>
     <form onSubmit={handleSubmit(onSubmit)}>
        <input className="fw-bold" defaultValue={service?.title} {...register("seleteditem")} disabled /> 
        <input placeholder="Name" {...register("name", { required: true })} />
        <input defaultValue={user?.email} placeholder="Email" {...register("email")} />
        <input placeholder="Phone"  {...register("phone")} />
        <input  placeholder="City" {...register("city")} />
        <input  placeholder="State/Province/Region" {...register("state")} />
        <input  placeholder="ZIP code/Postal code" {...register("zip")} />
        <textarea  placeholder="Address" {...register("address")} />
        <textarea placeholder="Special Requirements" {...register("information")} />
        <input id="btn"  type="submit" />
       </form> 
     </div>

        <div className="sidebar">
        <h3 className="review-title">Your Seleted item</h3>
        <div className="sidebar-content">
            <img  src={service?.img} alt="" />
             <div width="100px" ><p className="first-title text-start ms-3 ">{service?.title}</p></div>
             <h5 className="first-title text-start ms-3 ">{service?.price}</h5>
            
         </div>

        
        </div>

        </div>
        </div>
           
            
    );
};

export default SingleOrder;