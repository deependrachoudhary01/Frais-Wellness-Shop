import React from "react";
export default function Card({Pname, Price, image}){
    return(
        <>
        
    <div className="card ms-3 mt-5" style={{ width: '25rem' }}>
    <img
      src={image} className="card-img-top"
      alt="..."
    />
    <div className="card-body" style={{ backgroundColor: 'rgb(215, 215, 213)' }}>
      <p className="card-text">
        {Pname}
        <br />
        {Price}
        <br />
        <button type="button" className="btn btn-outline-secondary mt-3 col-12">
          Buy Now
        </button>
      </p>
    </div>
  </div>
        </>
    )
}