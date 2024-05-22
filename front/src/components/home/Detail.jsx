import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContext'

const Detail = () => {
const {detailId}=useParams()
const {product,setProduct}=useContext(ProductContext)
const GetData=async()=>{
const res=await axios.get("http://localhost:5000/products/"+detailId)
setProduct(res?.data)
console.log(res?.data);
}
useEffect(()=>{
  GetData()  
},[])
  return (
    <div className='Detailcart'>
       <img  className='DetailImg' src={product?.image} alt="" />
      <h3 className='DetailTitle'>{product?.title}</h3>
      <p>{product?.catagory}</p>
    </div>
  )
}

export default Detail
