import React from "react";
export default function Shopcard({ShopProName, Proimage, ShopProPrice}){
    return(
        <>
               
      <div className="card ms-5 mt-5" style={{ width: '25rem' }}>
        <img
          src= {Proimage} className="card-img-top"
          alt="..."
        />
        <div className="card-body" style={{ backgroundColor: 'rgb(215, 215, 213)' }}>
          <p className="card-text">
            {ShopProName}
            <br />
            {ShopProPrice} <br />
            <button type="button" className="btn btn-outline-secondary mt-3 col-12" onClick={() => alert('Buy Now button clicked')}>
              Buy Now
            </button>
          </p>
        </div>
      </div>
    

        </>
    )
}