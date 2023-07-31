import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';



const LoginPage = () => {

    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    const navigate = useNavigate();

    const handlerLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`http://192.168.18.210:5000/api/auth/signin`, {
                username: Username,
                password: Password,
            }); navigate('./dashboard')
        } catch (error) {   
            console.log(error)
        }
    }

    return (
        <div>
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handlerLogin}>
                    <div className="user-box">
                        <input type="text" required value={Username} onChange={(e) => setUsername(e.target.value)} />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input type="password" required value={Password} onChange={(e) => setPassword(e.target.value)} />
                        <label>Password</label>
                    </div>
                    <button type="submit" className='btn btn-primary'>Submit</button>
                </form>

                <div className="register">
                    <Link to={`/registerUser`}>Register for User</Link>
                    <p>|</p>
                    <Link to={`/registercandidate`}>Register for candidate</Link>

                </div>


            </div>
        </div>
    )
}

export default LoginPage
