import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = (proprs) => {
    console.log("Card", proprs);
         const {name,image} = proprs;
        
  return (
    <>
   <section className="cotainer text-center">
    <div className="card-content p-0 overflow-hidden h-100 shadow" style={{ width: "25rem" , border:"2px solid white" ,borderRadius:"1px",margin: "5px 5px 5px 5px",alignContent:"centers"}}>
    <div className="image-box">
        <img src={image} style={{borderRadius: "120px 120px 120px 120px ",border:"2px solid black" ,height:"250px", width:"250px" , marginTop:"30px"}}/>
    </div>
    <div className="card-body">
      <p className="card-title text-5rem mt-4 mb-3">Name:  <b>{name}.</b></p>
      <hr className="text-5rem"/>
         <button className="btn btn-danger mt-3 mb-3 pr-3" style={{ borderRadius: "20px"}}>Add To Team</button> 
        <button className="btn btn-primary mt-3 mb-3 pr-3" style={{ borderRadius: "20px"}}>Details</button>
    </div>
  </div>
  </section>
  
 
  </>
  )
}

export default Card;