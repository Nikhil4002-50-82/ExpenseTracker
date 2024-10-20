import React from "react";

export default function ExpenseCard({name,amount}){
    return(
        <>
                <li>{name}: &#8377;{amount}</li>
        </>
    );
}