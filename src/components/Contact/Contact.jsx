import React from "react";
export default function Contact (){
    return(
        <>
        <div className="container text-center mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src="https://static.wixstatic.com/media/c837a6_1e5ac650ac814a5d908f21bd78e529ae~mv2.jpg/v1/fill/w_513,h_629,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_1e5ac650ac814a5d908f21bd78e529ae~mv2.jpg" alt="" />
        </div>
        <div className="col-md-5">
          <p className="text-center fs-1 fw-normal">
            GET IN TOUCH
          </p>
          <div className="text-start fw-normal fs-2 text-body-dark">
            <p>Opning Hours</p>
            <p className="fs-5 text-body-secondary">
              Mon - Fri: 8am - 8pm <br />
              ​​Saturday: 9am - 7pm <br />
              ​Sunday: 9am - 8pm
            </p>
          </div>
          <div className="text-center fw-normal fs-2 text-body-dark ms-5 mt-5">
            <p>Address</p>
            <p className="fw-normal fs-5 text-body-secondary ms-5">
              500 Terry Francine Street <br />
              San Francisco, CA 94158 <br />
              123-456-7890
            </p>
          </div>
          <div className="text-end fs-5 text-body-dark ms-2 mt-3">
            <p>Get in Touch <a href="https://googlemail.com">info@mysite.com</a></p>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}