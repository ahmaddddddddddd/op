import React, { useEffect, useState } from 'react';
import './Login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');    
  const navigate = useNavigate();

  let storage = window.localStorage;

  const handlerLogin = async (e) => {     
    e.preventDefault();
    try {
      const response = await axios.post(`http://192.168.18.210:5000/api/auth/signin`, {
        username: Username,
        password: Password,
      });
     
      storage.setItem('token', response.data.token)
       
      console.log(response)
     navigate('./dashboard');
    } catch (error) {
      console.log(error);
      alert(error.response.data.message)

    }
  }

  useEffect (() => {
    if (storage.getItem('token')) {         
      navigate('./dashboard');
    }
},[])

//   function hapusDataJikaExpired() {
//     const storedDataWithTimestamp = JSON.parse(localStorage.getItem('data'));
//     if (storedDataWithTimestamp) {
//       const { data, timestamp } = storedDataWithTimestamp;
//       const currentTime = new Date().getTime();
//       const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // Satu hari dalam milidetik
//       if (currentTime - timestamp >= oneDayInMilliseconds) {
//         localStorage.removeItem('data');
//       }
//     }
//   };
  

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

export default LoginPage;
