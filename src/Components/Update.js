import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const {id}=useParams();
    const [data,setData]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:8080/players/'+id)
        .then(response=>setData(response.data))
        .catch(err=>console.log(err))
    },[])
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.put('http://localhost:8080/players/'+id,data)
        .then(response=>{
            alert("Data updated successfully!!");
            navigate('/')
        })
       

    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-light p-5 '>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name' >ID:</label>
                    <input  type='text' disabled value={data.id} className='form-control'
                     />
                    
                </div>
                <div>
                    <label htmlFor='name' >Name:</label>
                    <input  type='text' value={data.name} className='form-control'
                    onChange={e=>setData({...data,name:e.target.value})} />
                    
                </div>
                <div>
                    <label htmlFor='country'>Country:</label>
                    <input  type='text'value={data.country} className='form-control' 
                    onChange={e=>setData({...data,country:e.target.value})}/>
                </div><br/>
                <button className='btn btn-primary'>Update</button>
            </form>
        </div>
        
    </div>
  )
}

export default Update