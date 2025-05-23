import React, { useEffect, useState ,useRef} from 'react';
import Navbar from './Components/Navbar';
import Local from './Components/Local';
import Session from './Components/Session';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Home from './Components/Home';


const App = () => {   

    const [student,setStudents] = useState({})
    const [list,setList] = useState([]);
    const [hobby,setHobby] = useState([]);
    const [editId,setEditId] = useState(null);
    const updateRef = useRef();
    const focusRef = useRef();



    const handleChange=(e)=>{
    
      const {name,value,checked} = e.target
      if(name === 'hobby'){
        let newHobby = [...hobby]

        if(checked){
          newHobby.push(value)
        }
        else
        {
          newHobby = newHobby.filter((item)=> item != value)
        }
        setHobby(newHobby)
        setStudents({...student,hobby:newHobby});
        return;
      }


      setStudents({...student,[name]:value});
      console.log(student);
      
    }

    const handleSubmit=(e)=>{
       e.preventDefault();  
      
       if(editId === null){

         setList([...list,{...student,id:Date.now()}])
       }
       else
       {
        const updateList = list.map((item)=> item.id === editId ? student : item)
        setList(updateList)
        setEditId(null);
        updateRef.current.classList.remove('btn-success');
        updateRef.current.innerText = 'Submit';
        updateRef.current.classList.add('btn-primary');
        }
       
       setStudents({})
       setHobby([])
       focusRef.current.focus();
    }

     const handleDelete=(id)=>{
       const deleteData = list.filter((val)=> val.id !== id);
       setList(deleteData)
     }

     const handleEdit=(id)=>{
      const editData = list.find((val)=> val.id === id)
      setStudents(editData)
      setEditId(id)
      setHobby(editData.hobby || [])
       updateRef.current.classList.add('btn-success');
        updateRef.current.innerText = 'Update';
        updateRef.current.classList.remove('btn-primary');
        focusRef.current.focus();
     }

  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Navigate to="/Home" replace />} />
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Local' element={<Local
       handleSubmit={handleSubmit}
       student={student}
       list={list}
       handleChange = {handleChange} 
       hobby={hobby}
       editId={editId}
       handleDelete={handleDelete}
       handleEdit={handleEdit}
       setList={setList}
       updateRef={updateRef}
       focusRef={focusRef}
      />}/>
      <Route path='/Session' element={<Session
      handleSubmit={handleSubmit}
       student={student}
       list={list}
       handleChange = {handleChange} 
       hobby={hobby}
       editId={editId}
       handleDelete={handleDelete}
       handleEdit={handleEdit}
       setList={setList}
       updateRef={updateRef}
       focusRef={focusRef}

      />}/>
     </Routes>

    </BrowserRouter>
   
  
    
    
    </>
  );
}

export default App;
