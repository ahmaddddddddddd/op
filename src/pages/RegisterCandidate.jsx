    import React, { useState } from 'react'
    import './register.css'
    import axios from 'axios'
    import { Link, useNavigate } from 'react-router-dom';



    const RegisterCandidate = () => {


        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')
        const navigate = useNavigate();

    const handlerRegister = async(e)=>{

        e.preventDefault();     
        try {   
        const response = await axios.post('http://192.168.18.210:5000/api/auth/signupcand',{
            
            username:username,
            password:password
            
        });navigate('/login');      
                
        } catch (error) {
            console.log(error) 
            
        }   
    }

        return (
            <div>
                <div className="login-box">
                    <h2>Register </h2>
                    <form onSubmit={handlerRegister}>
                        <div className="user-box">
                            <input type="text" name="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                            <label>Username</label>
                        </div>
                        <div className="user-box">
                            <input type="password" name="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label>Password</label>
                        </div>          
                
                        <button type="submit" className='btn btn-primary'>Submit</button>
                    </form>
                </div>
            </div>




        )
    }

    export default RegisterCandidate
