import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const EditCp = () => {
   
 const [Name, setName]= useState ('');
 const [Address, setAddress]= useState ('');
 const [Phone, setPhone]= useState ('');
 const [Email, setEmail]= useState ('');

const Navigate = useNavigate();

 const { id } = useParams()
     
 const submit = async (e) => {  
  e.preventDefault()
  try {
      await axios.patch(`http://192.168.18.210:5000/api/comp/update/${id}`, {
        name:Name,
        email:Email,
        address:Address,
        phone:Phone 
      });Navigate('/companyprofile')
  } catch (error) {
      console.log(error)

  }
}

const fetchData = async () => {
  try {
    const response = await axios.get(`http://192.168.18.210:5000/api/comp/${id}`);
    const data = response.data;
    setName(data.name);
    setEmail(data.email);
    setAddress(data.address);
    setPhone(data.phone);
  } catch (error) {
    // Handle error here
    console.error(error);
  }
};

   useEffect(() => {
    fetchData()
   },[]);




 

  return (
    <div>
        <form className='row g-3 m-5' onSubmit={submit}>                                 
        <div className="col-md-6">
                    username
                    <input type="text" className="form-control" value={Name} onChange={(e) => setName(e.target.value)} placeholder='Your Name' />
                </div>
                <div className="col-6">
                    email
                    <input type="text" className="form-control" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                </div>
                <div className="col-6">
                address
                    <input type="text" className="form-control" value={Address} onChange={(e) => setAddress(e.target.value)} placeholder='address' />
                </div>
                <div className="col-6">
                phone
                    <input type="text" className="form-control" value={Phone} onChange={(e) => setPhone(e.target.value)} placeholder='phone' />
                </div>
          
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">UPDATE</button>

                </div>
            </form> 
    </div>
  )
}

export default EditCp
