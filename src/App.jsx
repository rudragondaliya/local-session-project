import React, { useEffect, useState } from 'react';
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


    useEffect(()=>{
      const saveList = JSON.parse(localStorage.getItem("list")) || []
      setList(saveList)
    },[])

    useEffect(()=>{
      localStorage.setItem("list",JSON.stringify(list));
    },[list])


    useEffect(()=>{
      const sessionList = JSON.parse(sessionStorage.getItem("list")) || []
      setList(sessionList)
    },[])

    useEffect(()=>{
      sessionStorage.setItem("list",JSON.stringify(list))
    },[list])



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
       }
       setStudents({})
       setHobby([])
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

      />}/>
     </Routes>

    </BrowserRouter>
   
  
    
    
    </>
  );
}

export default App;
