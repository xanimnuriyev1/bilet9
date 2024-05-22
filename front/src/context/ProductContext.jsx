import { createContext, useState } from "react";

export const ProductContext = createContext()

export const ProductProvider=({children})=>{
    const [data,setData]=useState([])
    const [product,setProduct]=useState([])
    return(
        <ProductContext.Provider
        value={{data,setData,product,setProduct}}
        >
{children}
        </ProductContext.Provider>
    )
}