import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const navigate=useNavigate();
    const [inputData,setInputData]=useState({name:'',country:''})
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8080/players',inputData)
        .then(res=>{
            alert("Data Added Succesfully")
            navigate('/');
            
        }).catch(err=>console.log(err))
        
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-light p-5 '>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name' >Name:</label>
                    <input  type='text' className='form-control'
                    onChange={e=>setInputData({...inputData,name:e.target.value})} />
                    
                </div>
                <div>
                    <label htmlFor='country'>Country:</label>
                    <input  type='text' className='form-control' 
                    onChange={e=>setInputData({...inputData,country:e.target.value})}/>
                </div><br/>
                <button className='btn btn-primary'>Add</button>
            </form>
        </div>
        
    </div>
  )
}

export default Add