import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Read = () => {
    const {id}=useParams();
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/players/'+id)
        .then(response=>setData(response.data))
        .catch(err=>console.log(err))
    },[])
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-auto border bg-light p-5 '>
            
                 <div>
                    <p><strong>ID:</strong>{data.id}</p>
                </div>
                <div>
                    <p><strong>Name:</strong>{data.name}</p>
                </div>
                <div>
                    <p><strong>Country:</strong>{data.country}</p>
                </div><br/>
                
        
        </div>
        
    </div>
  )
}

export default Read