import React,{ useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import {AiOutlineUserAdd} from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Usersign() {
  // const {register,handleSubmit,formState:{errors}}=useForm();
  // let navigate=useNavigate();
  // function submit1(data){
  //   console.log(data)
  //   navigate('/usernext')
  const navigate=useNavigate()
  const {register,handleSubmit,formState:{errors}}=useForm();
  const [password,setPassword]=useState("")
  function submit1(e){
    console.log(e)
    axios.post("http://localhost:3000/user-api/create-user",e)
    .then((data)=>{
       if(data.data.message==="New User created"){
        navigate("/users")
       }
       else{
         alert(data.data.message)
       }
    })
  }


  return (

      <div className='py-5 bgimg'>
    <div className='text-center card-box'>  
    <div class="card" style={{width :"20rem"}} >
      <h2 className='text-danger pt-5'>Student Signup</h2>
  <div class="card-body">
  <form onSubmit={handleSubmit(submit1)}>
      <div className="form-group pt-3">
          <label htmlFor="exampleInputname">Name</label>
          <input type="text" className="form-control w-75 mx-auto mb-3" id="exampleInputname1" aria-describedby="name" placeholder="Enter name" {...register("name",{required:true})}/>
         
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputrollno1">Roll Number</label>
          <input type="rollno" className="form-control w-75 mx-auto mb-3" id="exampleInputrollno1" aria-describedby="emailHelp" placeholder="Enter Rollno" {...register("Rollno",{required:true})}/>
         
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control w-75 mx-auto" id="exampleInputPassword1" placeholder="Password" {...register("password",{required:true})}/>
        </div>
        <div className="form-group form-check">
         
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
  </div>
</div>
</div>
</div>
      
  )
}

export default Usersign