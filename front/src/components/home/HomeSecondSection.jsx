import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductContext'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const HomeSecondSection = () => {
const navigate = useNavigate()
    const { data, setData } = useContext(ProductContext)
    const GetAllData = async () => {
        const res = await axios.get("http://localhost:5000/products")
        setData(res?.data)
        console.log(res?.data);
    }
    useEffect(()=>{
        GetAllData()
    },[])
    return (
        <div className='Carts'>
            {
                data.map((elem) => {
                    return <div className='Cart' key={elem._id}>
                        <img className='Img' src={elem.image} alt="" />
                        <h3>{elem.title}</h3>
                        <p>{elem.catagory}</p>
                        <button
                        className='Detail'
                        onClick={()=>navigate(`${elem._id}`)}
                        >Detail</button>
                    </div>
                })
            }
        </div>
    )
}

export default HomeSecondSection
