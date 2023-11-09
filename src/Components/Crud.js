import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Crud = () => {
    const navigate=useNavigate();
    const [records,setRecords]=useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/players')
          .then(response => {
            setRecords(response.data)
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
      const handleSubmit=(id)=>{
        const conf=window.confirm("Do you want to delete?");
        if(conf){
          axios.delete('http://localhost:8080/players/'+id)
          .then(response=>{
            alert("Record has deleted Succesfully")
            window.location.reload()
          })
          .catch(err=>console.log(err));
        }
      }

  return (
    <div className='container mt-4'>
        <div className='text-end'><button onClick={()=>{navigate('/add')}} className='btn btn-info'>Add +</button></div>
        <table className='table table-striped'>
        <thead>
          <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Country</th>
                <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.country}</td>
              <td>
                <Link to={`/update/${d.id}`} className='btn btn-primary mx-2'>Update</Link>
                <button onClick={e=>handleSubmit(d.id)} className='btn btn-danger mx-2'>Del</button>
             </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Crud