import React from 'react'

function Home() {
  return (
    <div >
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://previews.123rf.com/images/dualororua/dualororua1707/dualororua170700237/82718617-happy-school-children-in-front-of-school-building.jpg" height='400px' alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://media.istockphoto.com/photos/exterior-view-of-a-typical-american-school-building-picture-id1317007945?b=1&k=20&m=1317007945&s=170667a&w=0&h=L6exAWhMIvHk3ndOQdnRt6WNGfzcsh54WtCAVbO8NSk=" height='400px' alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://ak.picdn.net/shutterstock/videos/4541228/thumb/2.jpg" height='400px' alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev " href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
<div className=' kgf pt-2'>
  <h3 className='text-center'>* Latest News *</h3>
  <ul>
<marquee className="text-danger "><h4><li>Courses are available </li></h4></marquee>
</ul>
</div>

<div>
  <h3 className='text-info mt-3 ps-5 pe-5  text-center' >Govt Board of Secondary Education, Telangana state (Also known as:Govt Board of Secondary Education, Hyderabad)</h3>
  <p className='text-center mt-2 mb-2 ps-5 pe-5'>
  Govt Board of Secondary Education, Telangana state (Also known as: Govt Board of Secondary Education, Hyderabad) is an independent department functioning for the development of education of Secondary Examination (10TH Class Equ.) , Senior Secondary Examination (12TH Class Equ) and Diploma programme like D.Ed. etc. The Board of Secondary Education , Telangana is responsible for conducting the Examinations and a number of major and minor examinations as given below.
  </p>
</div>
<div className=' child mt-5 '>
  <h2 className='text-sucess text-center pb-3 pt-2'>Major Examinations</h2>
  <div className='row'>
   <div className='col'>
   <p className='col text-center  ps-5 pe-5 mt-2 '>Govt Board of Secondary Education, Telangana state
    (Also known as: Govt Board of Secondary Education, Hyderabad) examinations twice in a year. 
    This is the major examination with a registration of 12.15 lakh candidates for Annual (March -2014) examinations and 3.34 lakh candidates for Advanced Supplementary Examinations(May / June -2014)</p>
    </div>
    <div className='col'>
    <img className='imgk d-block mx-auto' src='https://www.bsetelanganagov.in/wp-content/uploads/2019/02/Examinations.jpg'/>
   </div>
  </div>
</div>
<div className='child2 bg-success row mt-5 text-center'>
<div className='col mt-3 ps-5'>
 <h3>APPLY FOR VERIFICATION</h3>
 <p>NOTE: VERIFICATION BY E-MAIL ALSO ENTERTAINED FREE OF COST DUE TO NEW TECHNOLOGY OF SCIENCE AND THE MISSION OF SAVE PAPER , SAVE TREE.</p>
</div>
<div className='col mt-3 pe-5 text-center foot'>
  <h3>Govt Board Of Secondary Education, Telangana State (Also Known As: Govt Board Of Secondary Education, Hyderabad)</h3>
  <p className='pb-2'>
  Govt Board of Secondary Education, Telangana state (Also known as: Govt Board of Secondary Education, Hyderabad)
   came into existence in 2000 as per Telangana Act of 2000 with its head-quarter at Hyderabad. 
  The Board started with a staff of 40 officials which has subsequently increased to 467. 
  The Education Board prescribes syllabus, courses of instructions and text books for school education in Telangana besides
   conducting examinations based on courses listed.
  </p>
</div>
<br></br>
</div>
  </div>  
  )
}

export default Home