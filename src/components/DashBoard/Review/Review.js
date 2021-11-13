import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './Review.css'

const Review = () => {

const { register, handleSubmit,reset } = useForm();


    const onSubmit = data => {
        axios.post('https://intense-ridge-65532.herokuapp.com/review',data)
        .then(res => {
            if(res.data.insertedId) {
                alert("Sucessfully added")
                reset();
            }
           })
    };

    

    return (
     <div>
    <h3 className="add-title">Add You Review</h3>
    <form  className="container form-section" onSubmit={handleSubmit(onSubmit)}>
    <input placeholder="Name" {...register("name")} />
    <textarea className="textarea" placeholder="your comment" {...register("comment")} />
    <input placeholder="rating" {...register("rating")} />
    <input className="service-button" type="submit" />
    </form>
    </div>
    );
};

export default Review;