import React from 'react';
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <>
    
      <div className="main d-flex align-items-center justify-content-center">
      <div className="container bg-primary text-white p-5 d-flex align-items-center flex-column rounded-5">
         <h1 className='text-center  fs-1 mb-3'>welcome User...</h1>
        <h1 className='text-center'>Choose any one Storage for Crud</h1>
        <div className="row">
            <div className="col-md-6  mt-3">
                <div className="local-box text-end">
                    <Link className='btn  btn-danger' to="/Local">Localstorage</Link>
                </div>
            </div>
            <div className="col-md-6  mt-3">
                  <div className="session-box text-start">
                    <Link className='btn btn-warning' to="/Session">Sessionstorage</Link>
                </div>
            </div>
        </div>
      </div>
      </div>

      
    </>
  );
}

export default Home;
