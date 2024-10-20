import React from "react";
import "./input.css"

export default function Input({id,label,type,placeholder,onChange,value}){
    return(
        <>
            <label htmlFor={id}>{label}</label>
            <input type={type} placeholder={placeholder} id={id} name={id} onChange={onChange} value={value} required/>
        </>      
    );
}