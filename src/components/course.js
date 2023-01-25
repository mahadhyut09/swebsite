import React, { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom';
function Course() {
  function getData(){
    //code
  }
  var [a,seta]=useState("hello");
  return (
    <div className='child'>
      <div className='childk'>
        <h1 className='text-center text-light about'>Courses</h1>
      </div>
    <div className='row justify-content-center mx-auto'>
      <div className=' col mt-2 me-3 mx-auto'>
      <div className="card bg-light d-block mx-auto">
  <img className="card-img-top t1" src="https://static.vecteezy.com/system/resources/thumbnails/004/454/866/small/math-icon-with-kids-and-math-tools-free-vector.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title text-center">Mathematics</h5>
    <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/goto?s=maths" className="btn btn-primary b">Go to course</a>
  </div>
</div>
</div>
<div className='col mt-2 mb-3 mx-auto'>
      <div className="card bg-light d-block mx-auto">
      <img className="card-img-top t1" src="https://novoscriptorium.files.wordpress.com/2018/12/5aba01ec0387e.jpg?crop" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title text-center">Physics</h5>
    <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/goto?s=physics" className="btn btn-primary b">Go to course</a>
  </div>
</div>
</div>
<div className='col mt-2 me-3 mx-auto'>
      <div className="card bg-light d-block mx-auto">
      <img className="card-img-top t1" src="https://peersalley.s3.amazonaws.com/assets/tracks/chemistry_210_45.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title text-center">Chemistry</h5>
    <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/goto?s=chemistry" className="btn btn-primary b">Go to course</a>
  </div>
</div>
</div>
    </div>
    <br></br>
    </div>
    
  )
}

export default Course