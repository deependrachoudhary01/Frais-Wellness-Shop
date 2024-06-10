import React from "react";
import { Link , NavLink } from "react-router-dom";
export default function Footer(){
  return(
    <>
<div className="">
      <footer className="text-center text-white" style={{ backgroundColor: 'rgb(103, 103, 91)' }}>
        <div className="container">
          <section className="mt-5">
            <div className="row text-center d-flex justify-content-center pt-5">
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/Payments" className="text-white text-decoration-none">Payments</Link>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="ShipReturn" className="text-white text-decoration-none">Shipping & Returns</Link>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="Contact" className="text-white text-decoration-none">contact us</a>
                </h6>
              </div>
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="Faqs" className="text-white text-decoration-none">faq'<super className="text-lowercase">s</super></Link>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="Help" className="text-white text-decoration-none">help</Link>
                </h6>
              </div>

            </div>
          </section>

          <hr className="my-5" />

          <section className="mb-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p>
                  Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: 'rgba(50, 49, 49, 0.2)' }}>
          © 2020 Copyright:
          <a className="text-white" href="https://FraisWellness.com">Wellness Shop</a>
        </div>
      </footer>
    </div>
    </>
  )
}