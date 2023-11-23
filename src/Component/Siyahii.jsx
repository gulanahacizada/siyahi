import React, { useEffect, useState } from 'react';
import './Siyahi.css'
function Siyahi() {
const[result,setResult]=useState([]);
const[item,setItem]=useState({
    name: "",
    department: "",
    role: ""
});
const[find,setFind]=useState("");
useEffect(()=>{
    fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setResult(data)
    })
},[])
const searchData= (e)=>{
    setFind(e.target.value.toLowerCase())
}
  return (
    <div class="main">
        <input type='text' placeholder='Search name' onChange={searchData}/>
        <div class="big">
        {
result.filter(e=>e.name.toLowerCase().includes(find)).map((a,b)=>(
    <div class="key" key={b}>
        <h1>{a.name}</h1>
        <p>{a.department}</p>
        <p>{a.role}</p>
        </div>
))
        }
        </div>
    </div>
  )
}

export default Siyahi