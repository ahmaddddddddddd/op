import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CompanyProfile = () => {
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.18.210:5000/api/comp');
      setUser(response.data);
    } catch (error) {
      console.log('Error fetching user:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlerDelete = async (id) => {
    try {
      await axios.delete(`http://192.168.18.210:5000/api/comp/delete/${id}`);
      fetchData();
    } catch (error) {
      console.log('Error fetching user:', error);
    }
  };

  return (
    <div>
      <div className="container m-5">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">address</th>
              <th scope="col">phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.phone}</td>
                <td>
                  <Link to={`/editusr/${item.id}`} className="btn btn-primary me-3">
                    Edit
                  </Link>
                  <button onClick={() => handlerDelete(item.id)} className="btn btn-danger mb-3">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyProfile;
