import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './goto.css'


function Goto() {
    let navigate=useNavigate();
    let course;
    const urlParams = new URLSearchParams(window.location.search);
    course=urlParams.get('s')


    let [data, getData] = useState([])

    const [src,setSrc] = useState("")

    useEffect(()=>{
        
        axios.get(`http://localhost:3000/courses-api/getdata/${course}`)
        .then((response)=>{
            getData(response.data.payload)
        })
        .catch((err)=>console.log("ERRrO", err))

    },[])

    return (
        <div>
            <p className='text-center display-6'>
                Name of the course: <strong>{data?.name}</strong>
            </p>

            <div className='d-flex'>
            {
                data?.sources?.map((v,i)=>
                <div onClick={()=>setSrc(v.link)} className='btn btn-secondary m-3' key={i}>
                    {v.name}
                </div>)
            }
            </div>

            {
                src===""?
                <img src = {data?.tnumbnail} alt="Hello" className='d-block mx-auto cimg p-3'/>:
                <iframe className='d-block mx-auto cimg p-3' width="640" height="360" src={src} title="What is Mathematics?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            }
            
        </div>
        
    )
}

export default Goto