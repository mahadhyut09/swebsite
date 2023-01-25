import React, { useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import {AiOutlineUserAdd} from 'react-icons/ai'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Tsignup() {
  const navigate=useNavigate()
  const {register,handleSubmit,formState:{errors}}=useForm();
  const [password,setPassword]=useState("")
  function submit(e){
    axios.post("http://localhost:3000/teach-api/create-teach",e)
    .then((data)=>{
       if(data.data.message==="New User created"){
        navigate("/tlogin")
       }
       else{
         alert(data.data.message)
       }
    })
  }
  return (
    <div className = "bgimg">
    <div className='py-5'>
    <div className='text-center card-box'>  
    <div class="card" style={{width :"20rem"}} >
      <h2 className='text-danger pt-5'>Teacher Signup</h2>
  <div class="card-body">
  <form onSubmit={handleSubmit(submit)}className=" d-block mx-auto">
    <div className="form-group pt-3">
        <label htmlFor="exampleInputname">Name</label>
        <input type="text" className="form-control w-75 mx-auto mb-3" id="exampleInputname" aria-describedby="name" placeholder="Enter name" {...register("name",{required:true})}/>
        
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input type="email" className="form-control w-75 mx-auto mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Rollno" {...register("email",{required:true})}/>
        
      </div>
      <div className="form-group mb-4">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control w-75 mx-auto" id="exampleInputPassword1" placeholder="Password" {...register("password",{required:true})}/>
      </div>
      
      <button type="submit" className="btn btn-primary mb-3">Submit</button>
    </form>
  </div>
</div>
</div>
</div>
</div>
  )
}

export default Tsignup