import React, { useEffect, useState } from 'react'
import './register.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';



const Register = () => {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [companyId, setCompanyId] = useState('')
    const [companyList, setCompanyList] = useState([])
    const navigate = useNavigate();


    const fetchData = async () => {
        try {
            const response = await axios.get(`http://192.168.18.210:5000/api/comp`)
            setCompanyList(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    const handlerRegister = async (e) => {
    
        e.preventDefault();
        try {
             await axios.post('http://192.168.18.210:5000/api/auth/signup', {
                username: username,
                password: password,
                companyId: companyId,

            }); navigate('/login'); 

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
                    <div className="user-box">
                        <div className="col-8">
                            <select className='form-control' value={companyId} onChange={(e) => setCompanyId(e.target.value)}>
                                {companyList.map((item, index) => (
                                    <option className='option' value={item.id} key={index}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <button type="submit" className='btn btn-primary'>Submit</button>
                    <Link to={`/login`} className="btn btn-danger ms-3 mt-3">Back</Link>
                </form>
            </div>
        </div>
    )
}

export default Register