import React, { useEffect } from 'react'
import axios from 'axios'
import {Link, navigate,useNavigate} from 'react-router-dom'
import './Dashboard.css'

const Dashboard = () => {
    const navigate = useNavigate();

    let storage = window.localStorage;
    const token = storage.getItem('token')
    
useEffect (()=>{
          if (!storage.getItem('token')) {
            navigate('/login')
          }
    },[])
    
    const SignOut = async () =>{
        storage.removeItem('token');
         navigate('/login') 
}

    return (
        <div>
      
         <button className='btn btn-danger ms-4' onClick={()=> SignOut()}>Sign Out</button>

            <div className="content">

                <div className="box">
                    <div className="title">
                    <h4>Profile Company</h4>
                        <div className="btnn">
                            <Link to={`/companyprofile`}>Check Our  Company </Link>
                             </div>
                    </div>
                </div>

                <div className="box">
                    <div className="title">
                    <h4>List candidate</h4>
                        <div className="btnn">
                        <Link to={`/listcandidate`}>Check Our candidate</Link>
                        </div>
                    </div>
                </div>


       </div>
       </div>
    )
}

export default Dashboard
