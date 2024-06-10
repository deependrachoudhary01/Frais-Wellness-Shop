import React from "react";
export default function CardData(){
    const ProductDataList =[{ProductName:"Levender", Price:50 , image:"https://static.wixstatic.com/media/c837a6_e2ac14427adf46bda9a01b4a736fc5bf~mv2.jpg/v1/fill/w_541,h_721,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_e2ac14427adf46bda9a01b4a736fc5bf~mv2.jpg"},
    {ProductName:"Levender", Price:60 , image:"image"},
    {ProductName:"Levender", Price:70 , image:"image"},
    {ProductName:"Levender", Price:70 , image:"image"}
    ]
      
    
    return(
        <><div className="d-flex flex-wrap justify-content-center">
        {ProductDataList.map((data) => (
          <div className="card ms-3 mt-5" style={{ width: "25rem" }}>
            <img src={data.image} className="card-img-top" alt="..." />
            <div className="card-body" style={{ backgroundColor: "rgb(215, 215, 213)" }}>
              <p className="card-text">
                {data.ProductName}
                <br />
                {data.Price}
                <br />
                <button type="button" className="btn btn-outline-secondary mt-3 col-12">
                  Buy Now
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>
        </>
    )
}