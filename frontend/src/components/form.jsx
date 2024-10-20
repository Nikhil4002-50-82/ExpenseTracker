import React,{useState,useEffect} from "react";
import axios from "axios";
import "./form.css";
import Heading from "./heading";
import Input from "./input";
import ExpenseCard from "./expenseCard";

function createLists(list){
   return(<ExpenseCard 
        key={list.id}
        name={list.name}
        amount={list.amount}
    />);
}

const Form=()=>{
    const [obj,setObj]=useState({
        name:"",
        amount:""
    });
    const [result,setResult]=useState("");
    const [amount,setAmount]=useState(0);

    function handleChange(event){
        const {name,value}=event.target;
        setObj((prev)=>{
            return({
                ...prev,
                [name]:value
            });
        })
    }
    
    function handleClick(event){
        event.preventDefault();
        const postData=async()=>{
            const response=await axios.post('https://expensetracker-hl42.onrender.com/item',obj);
            setResult(response.data);
            setAmount(response.data.totalAmount);
            setObj({
                name:"",
                amount:""
            })
        }
        postData();
    }

    function deleteAll(event){
        event.preventDefault();
        const deleteItem=async()=>{
            const response = await axios.delete(`https://expensetracker-hl42.onrender.com/delete`);
            setResult(response.data);
        }
        deleteItem();
    }

    return(
        <div className="form-container">
            
            <Heading>Expense Tracker</Heading>
            
            <form>
                
                <Input id="name" label="Item Name:" type="text" placeholder="Enter item name" onChange={handleChange} value={obj.name} />
                
                <Input id="amount" label="Item Amount:" type="text" placeholder="Enter item amount" onChange={handleChange} value={obj.amount} />
                
                <div className="btn-container">
                    <button onClick={handleClick}>Add Item</button>
                    <button onClick={deleteAll}>Clear All</button>
                </div>
                
                {result?
                <div className="result-container">
                    <ul>
                        {result.items.map(createLists)}
                    </ul>
                    <div className="amt">
                    &#8377;{amount?amount:0}
                    </div>
                    
                </div>:<div className="amt">
                &#8377;0
                    </div>}
            </form>
        </div>
    );
}

export default Form;
