import React, { useState } from 'react'
import './App.css'
// import ("bootstrap/dist/css/bootstrap.min.css")
// import ("../node_modules/bootstrap/dist/css/bootstrap.min.css")
const App = () => {
  let [todoinput,updateinput] = useState()
  let [nextid,setnextid] = useState(4)
  let [todolist,updatetodo] = useState([
    {
      id:1,
      task:'Learn html'
  },
  {
    id:2,
    task:'Learn css'
  },
  {
    id:3,
    task:'Learn js'
  }
])
    function Addnewtodo(){
      if(todoinput===""){
        alert("please enter a task")
      }
      else{
        let newtodos=[
          ...todolist,{
            id:nextid,task:todoinput
          }
        ]
        updatetodo(newtodos)
        setnextid(nextid+1)
      }
      updateinput("")
    }

    function deletedo(id){
      let onetodo=todolist.filter((todo)=>todo.id!=id)
      updatetodo(onetodo)
    }
  return (
    <div className='container mt-5 w-50'>
      <div className='input-group'>
        <input type="text" onChange={(e)=>{
          let task = e.target.value;
          updateinput(task)
        }} className='form-control' />
        <button className='btn btn-primary' onClick={Addnewtodo}>App</button>
      </div>

      <ul className='list-group mt-5'>
        {
          todolist.map((todo)=>{
            return(
              <>
              <li className='list-group-item'>
              <p>{todo.task}</p>
              <button className='btn' onClick={()=>{deletedo(todo.id)}}>❌</button>
              </li>
              </>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App
