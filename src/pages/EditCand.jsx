import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const EditCand = () => {

    const [companyId, setCompanyId] = useState('')
    const [dropdown, setDropdown] = useState([]);


    const Navigate = useNavigate()

    const { id } = useParams()
    

    const submit = async (e) => {
        e.preventDefault()
        try {
            await axios.patch(`http://192.168.18.210:5000/api/cand/update/${id}`, {
                companyId: companyId
            })
            Navigate('/listcandidate')
        } catch (error) {
            console.log(error)

        }
    }   

    const getDropdown = async () => {
        try {
            const response = await axios.get('http://192.168.18.210:5000/api/comp');
            setDropdown(response.data);
        } catch (error) {
            console.error(error);
        }
    };



    useEffect(() => {
        getDropdown();
    }, [])


    return (
        <div>

            <form className='row g-3 m-5' onSubmit={submit}>
                <div className="col-6">
                    company id
                    <select id="companyId" className="form-control" value={companyId} onChange={(e) => setCompanyId(e.target.value)} placeholder='company id'>
                        {dropdown.map((item, index) => (
                            <option value={item.id} key={index}>{item.name}</option>
                        ))}
                    </select>   
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Add</button>

                </div>
            </form>



        </div>
    )
}

export default EditCand
