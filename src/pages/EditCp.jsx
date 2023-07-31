import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate,useParams } from 'react-router-dom';

const EditCp = () => {
   
 const [Username, setUsername]= useState ('');
 const [Company, setCompany]= useState ('');
 const [Address, setAddress]= useState ('');
 const [Phone, setPhone]= useState ('');
 const [Email, setEmail]= useState ('');

 const { id } = useParams()


 const HandlerEdit = async (e)=> {
    e.preventDefault();

   try {
    const response = await axios.patch(`http://192.168.18.210:5000/api/comp/update/${id}`,{
        username:Username,
        company:Company,
        address:Address,
        phone:Phone,
        email:Email
    });Navigate('/editusr')
   } catch (error) {
    console.log(error)
   }

   const fetchData = async () => {
    try {
      const response = await axios.get(`http://192.168.18.210:5000/api/comp/update/${id}`);
      const data = response.data;
      setUsername(data.Username);
      setCompany(data.company);
      setAddress(data.Address);
      setPhone(data.Phone);
      setEmail(data.Email);
    } catch (error) {
      // Handle error here
      console.error(error);
    }
  };

   useEffect(() => {
       HandlerEdit()
   },[]);




 }


  return (
    <div>
        <form className='row g-3 m-5' onSubmit={HandlerEdit}>
        <div className="col-md-6">
                    username
                    <input type="text" className="form-control" value={Username} onChange={(e) => setUsername(e.target.value)} placeholder='Your Name' />
                </div>
                <div className="col-6">
                    company
                    <input type="text" className="form-control" value={Company} onChange={(e) => setCompany(e.target.value)} placeholder='company' />
                </div>
                <div className="col-6">
                address
                    <input type="text" className="form-control" value={Address} onChange={(e) => setAddress(e.target.value)} placeholder='address' />
                </div>
                <div className="col-6">
                phone
                    <input type="text" className="form-control" value={Phone} onChange={(e) => setPhone(e.target.value)} placeholder='phone' />
                </div>
                <div className="col-6">
                    email
                    <input type="text" className="form-control" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Add</button>

                </div>
            </form>
    </div>
  )
}

export default EditCp
