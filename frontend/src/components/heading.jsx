import React from "react";
import "./heading.css"

const Heading=({children})=>{
    return(<h1 className="heading" style={{alignSelf:"center"}}>{children}</h1>);
}

export default Heading;