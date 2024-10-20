import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

var items=[];
var countID=0;
var totalAmount=0;

app.get("/",(req,res)=>{
    console.log(totalAmount);
    res.json({
        totalAmount:totalAmount,
        items
    });
});

app.post("/item",(req,res)=>{
    const newItem={
        id:++countID,
        name:req.body.name,
        amount:req.body.amount
    }
    totalAmount+=parseInt(req.body.amount);
    items.push(newItem);
    res.json({
        totalAmount,
        items
    });
});

app.delete("/delete",(req,res)=>{
    items=[];
    totalAmount=0;
    countID=0;
    res.json(totalAmount);
})

app.listen(port,()=>{
    console.log(`Server running o port ${port}.`)
})


