import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Dashboard.css'

const Dashboard = () => {



    return (
        <div>

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
