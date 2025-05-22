import React from 'react';

const Session = ({handleSubmit,handleChange,student,list,hobby,editId,handleDelete,handleEdit}) => {
  return (
    <>
     <div className="container mt-5">
        <div className="row">
            <div className="col-md-6 mx-auto">
                <form  method='post' onSubmit={handleSubmit}>
                    <h1 className='text-center fw-bold'>Students Details With Session Storage</h1>
                <div className="mb-3 mt-4">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" name='username' value={student.username || ''} onChange={handleChange} className="form-control" id="name" aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="surname" className="form-label">Surname:</label>
                    <input type="text" name='surname' value={student.surname || ''} onChange={handleChange}  className="form-control" id="surname" />
                </div>
                <div className='hobby'>
                    <label htmlFor="">Hobby</label> <br />
                <div className="mb-3 mt-3 form-check form-check-inline">
                    <input type="checkbox" 
                    className="form-check-input" 
                    name='hobby' value="Dancing"
                     onChange={handleChange} 
                     id="exampleCheck1" 
                     checked={hobby.includes("Dancing") ? true : false}
                     />
                    <label className="form-check-label" htmlFor="exampleCheck1">Dancing</label>
                </div>
                <div className="mb-3 mt-3 form-check form-check-inline">
                    <input type="checkbox"
                     className="form-check-input" 
                     name='hobby' value="Reading" 
                     onChange={handleChange} 
                     id="exampleCheck2" 
                      checked={hobby.includes("Reading") ? true : false}
                     />
                    <label className="form-check-label" htmlFor="exampleCheck1">Reading</label>
                </div>
                <div className="mb-3 mt-3 form-check form-check-inline">
                    <input type="checkbox" 
                    className="form-check-input" 
                    name='hobby' value="Singing" 
                    onChange={handleChange} 
                    id="exampleCheck3"
                    checked={hobby.includes("Singing") ? true : false}
                     />
                    <label className="form-check-label" htmlFor="exampleCheck1">Singing</label>
                </div>

                <div className="gender mb-3">
                    <label htmlFor="">Gender</label>
                <div>
                <div className="form-check form-check-inline mt-3">
                    <input className="form-check-input" 
                    type="radio"
                     name="gender" 
                     onChange={handleChange} 
                     value="male" 
                     id="exampleRadios1" 
                     defaultValue="option1" 
                     checked={student.gender === 'male' ? true : false}

                     />
                    <label className="form-check-label" htmlFor="exampleRadios1">
                    Male
                    </label>
                </div>
                <div className="form-check form-check-inline ">
                    <input className="form-check-input" 
                    type="radio" 
                    name="gender" 
                    onChange={handleChange} 
                    value="female" 
                    id="exampleRadios2" 
                    defaultValue="option2" 
                    checked={student.gender === 'female' ? true : false}
                    />
                    <label className="form-check-label" htmlFor="exampleRadios2">
                    Female
                    </label>
                </div>
              
                </div>

                </div>
                <div className="address">
                    <label htmlFor="">Address</label> <br />
                    <textarea className='mt-1 mb-3' onChange={handleChange} cols="40" rows="4" name="address" id="address" value={student.address || ''}></textarea>
                </div>
                </div>

               <select className="form-select mb-3" 
               onChange={handleChange} 
               name='city' id='city' 
               value={student.city || ''} 
               aria-label="Default select example">
                <option value="" disabled>
                        --Select-City--
                      </option>
                      {['Navsari', 'Surat', 'Daman'].map((city, i) => (
                        <option key={i} value={city}>
                          {city}
                        </option>
                      ))}
                </select>


                <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
      </div>

       <div className="container-fluid mt-5   ">
        <div className="row">
          <div className="col-md-9 mx-auto">
            <table className="table table-striped">
              <thead>
                <th>Sr.no</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Hobby</th>
                <th>Gender</th>
                <th>Address</th>
                <th>City</th>
                <th>Action</th>
              </thead>
              <tbody>
                   {
                     list.map((val,idx)=>{
                        const {id,username,surname,hobby,gender,address,city} = val;
                        return(
                            <tr key={val.id}>
                                <td>{idx+1}</td>
                                <td>{username}</td>
                                <td>{surname}</td>
                                <td>{hobby?.toString()}</td>
                                <td>{gender}</td>
                                <td>{address}</td>
                                <td>{city}</td>
                                <td>
                                    <button className='btn btn-warning mx-3'onClick={()=>handleEdit(val.id)}>Edit</button>
                                    <button className='btn btn-danger'onClick={()=>handleDelete(val.id)}>Delete</button>
                                </td>

                            </tr>
                        )
                     })
                   }  
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  );
}

export default Session;
