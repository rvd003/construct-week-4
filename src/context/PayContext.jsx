import { createContext, useState } from "react";

export const PayContext=createContext();

export const PayContextProvider=({children})=>{
    const[cart,setCart]=useState(0);

    const handleChange=(inc)=>{
        setCart(cart+Number(inc));

    }
    const handleRemove=(inc)=>{
        let x=Math.floor(cart-Number(inc/2))
        if(x<0){
            setCart(0)
        }else{
            setCart(x)

        }
        


    }
    console.log(cart)
    
    return(
        <PayContext.Provider value={{cart,handleChange,handleRemove}}>
           {children}
        </PayContext.Provider>
    )
    
}
