import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddAProduct.css'

const AddNewService = () => {

const { register, handleSubmit,reset } = useForm();


    const onSubmit = data => {
        axios.post('http://localhost:5000/product',data)
        .then(res => {
            if(res.data.insertedId) {
                alert("Sucessfully added")
                reset();
            }
           })
    };

    

    return (
     <div>
    <h3 className="add-title">Add You New Service Here</h3>
    <form  className="container form-section" onSubmit={handleSubmit(onSubmit)}>
    <input placeholder="img" {...register("img")} />
    <input placeholder="title" {...register("title")} />
    <textarea className="textarea" placeholder="desc" {...register("desc")} />
    <input placeholder="price" {...register("price")} />
    <input className="service-button" type="submit" />
    </form>
    </div>
    );
};

export default AddNewService;