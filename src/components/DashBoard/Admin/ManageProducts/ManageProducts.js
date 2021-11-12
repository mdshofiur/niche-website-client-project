import React,{useEffect, useState} from 'react';
import {Table,Button} from 'react-bootstrap'

const ManageProducts = () => {

    const [product,setProduct] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])


      const HandleDetele = id => {
        const proceed = window.confirm("Are Sure to Delete?")
        if(proceed){
          const url = `http://localhost:5000/product/${id}`;
          fetch(url, {
           method: 'DELETE',
          })
          .then(res => res.json())
          .then(data => {
              if(data.deletedCount){
                 const remain = product.filter(product => product._id !== id);
                 setProduct(remain)
              }
          })
        }
    }


    return (
   <Table striped bordered hover size="sm" >
   <thead>
    <tr>
      <th>No</th>
      <th>Img</th>
      <th>Name</th>
      <th>Price</th>
      <th style={{paddingLeft:'30px'}}>Action</th>
    </tr>
  </thead>

  { product.map((product,Index) =><tbody key={product._id}>
    <tr>
      <td>{Index}</td>
      <td width="120"> <img width="80" src={product.img} alt="Italian Trulli"/> </td>
      <td width="430" >{product.title}</td>
      <td>${product.price}</td>
      <td style={{paddingLeft:'30px'}}> <Button onClick={()=> HandleDetele(product._id)} variant="danger">Delete</Button></td>
    </tr>
  </tbody>)
  }

</Table>
    );
};

export default ManageProducts;