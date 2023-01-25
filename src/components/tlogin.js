import React, { useEffect, useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { AiOutlineUserAdd } from 'react-icons/ai'
import axios from 'axios';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

function Tlogin() {

  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm();
  async function submit(e) {
    const res = await axios.post("http://localhost:3000/teach-api/login", e)

    if (res.data.message === "success") {
      localStorage.setItem("token", res.data.payload)
      localStorage.setItem("userdata", JSON.stringify(res.data.userObj))
      navigate("/course")
    }
    else {
      setModalMessage(res.data.message)
      setModal(true) 
    }

  }

  const [modal,setModal]=useState(false)
  const [message,setModalMessage]=useState("")

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/course")
    }
  }, [])

  return (
    <div className='py-5 tgimg'>

      <Modal isOpen={modal} handleClose={()=>setModal(false)}>
        <div>
          {message}
        </div>
      </Modal>

      <div className='text-center card-box'>
        <div className="card" style={{ width: "18rem" }} >
          <h2 className='text-danger pt-5'>Login</h2>
          <div className="card-body">
            <form onSubmit={handleSubmit(submit)}>
              <div className="form-group ">
                <label htmlFor="exampleInputEmail1 "><strong>Mail ID</strong></label>
                <input type="email" className="form-control w-75 mx-auto mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Rollno" {...register("email", { required: true })} />

              </div>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputPassword1"><strong>Password</strong></label>
                <input type="password" className="form-control w-75 mx-auto" id="exampleInputPassword1" placeholder="Password" {...register("password", { required: true })} />
              </div>

              <button type="submit" className="btn btn-primary mb-3">Teacher Login</button>
            </form>
            <span>Don't have account <a href="/tsignup" className='text-danger'>Sign Up</a> </span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Tlogin