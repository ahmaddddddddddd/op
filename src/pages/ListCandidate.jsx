import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';                 

const ListCandidate = () => {
  const [candidates, setCandidates] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.18.210:5000/api/cand/view');
      setCandidates(response.data.data);
    } catch (error) {
      console.log('Error fetching candidates:', error);
    }
  };
  

  useEffect(() => {
    fetchData();
  }, []); 

  const handlerDelete = async (id) => {
    try {
      // console.log(id)
      await axios.delete(`http://192.168.18.210:5000/api/cand/delete/${id}`);
      fetchData();
    } catch (error) {
      console.log('Error deleting candidate:', error);
    }
  };  



  

  return (  
    <div>

      <div className="container m-5">
      <Link to={`/login/dashboard`} className="btn btn-danger ms-3 mb-3">Back</Link>

        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">CompanyId</th>
              <th scope="col">Action</th>  
            </tr>
          </thead>  
          <tbody>
            {candidates.map((candidate, index) => (
              <tr key={candidate}>
                <td>{index+1}</td>
                <td>{candidate.title}</td>
                <td>{candidate.description}</td>
                <td>
                  <Link to={`/editcand/${candidate.id}`} className="btn btn-primary me-3">
                    Edit
                  </Link>
                  <button onClick={() => handlerDelete(candidate.id)} className="btn btn-danger mb-3">
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

export default ListCandidate;
