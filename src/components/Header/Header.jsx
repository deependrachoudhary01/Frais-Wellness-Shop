import React from 'react'
import { Link, NavLink } from 'react-router-dom';


export default function Header() {
  return (
    <>
      <div class="TopHeader p-1">
        <p class="text-light text-center">FREE SHIPPING ON ORDERS OVER $50</p>
      </div>
      <div className="navbar navbar-expand-lg d-flex nav_main sticky-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse nav_list"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav d-flex mx-2 mb-lg-1">
              <li className="nav-item"><Link className="nav-link" to="Shop">SHOP</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="OurStory">OUR STORY </Link>
              </li>
              <li className="nav-item"><Link className="nav-link" to="Blog">BLOG </Link></li>
              <li className="nav-item"><Link className="nav-link" to="Sale">SALE </Link></li>
              <li className="nav-item"><Link className="nav-link" to="Contact">CONTACT </Link></li>
            </ul>
          </div>
          <div className="my-4 col-4 d-flex faris_nav">
            <h2 style={{ border: '2px solid black', padding: '6px', width: '120px', textAlign: 'center', borderRadius: '3px' }}>FARIS</h2>
          </div>
          <div className="col-2 nav_search">
            <input
              className="form-control me-2"
              type="input"
              placeholder="Search..."
            />
          </div>
          <div className="nav_login">
            <button className="btn formbutton">
              <i className="bi bi-person-circle"></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </button>
          </div>
          <div className="nav_cart" >
          <button className="btn formbutton">
            <i class="bi bi-bag-heart"></i>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-heart" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
            </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}