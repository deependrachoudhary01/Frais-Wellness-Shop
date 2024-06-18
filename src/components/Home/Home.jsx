import React from "react";
import { Link } from "react-router-dom";
function Home() {
   return (
      <>
         <div className="d-flex position-relative outer_oneImg">
            <div className="p-5 oneImg">
               <img className="img-fluid"
                  src="https://static.wixstatic.com/media/84770f_b98c8b47c5b047efb18ac4d17f50462a~mv2.jpg/v1/crop/x_675,y_0,w_6150,h_4237/fill/w_1270,h_875,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pexels-vlada-karpovich-6755753-122.jpg"
                  alt=""
               />
            </div>
            <div className="position-absolute top-50 start-50 textImage">
               <h4 className="fw-semibold fs-5" style={{ letterSpacing: '0.1rem' }}>
                  HANDCRAFTED ORGANIC SOAPS & CANDLES
               </h4>
               <h2
                  className="fw-semibold"
                  style={{ fontSize: '3.5rem', letterSpacing: '0.1rem' }}
               >
                  JUST LIKE NATURE INTENDED
               </h2>
               <Link to="shop" >

               <button type="button" className="btn btn-outline-secondary button-media">
                  Shop Now
               </button>
               </Link>
            </div>
         </div>
         <div>
            <div className="h-100 mt-3 shopFavTxt">
               <h1 className="text-center fw-normal" style={{ letterSpacing: '8px' }}>
                  SHOP OUR FAVORITES
               </h1>
            </div>
            {/* Part two outer_Img&Txt */}
            <div className="container text-center mt-5">
               <div className="row">
                  <div className="col-md-5">
                     <p className="text-center fs-2 fw-normal">
                        NATURE’S ESSENCE <br />
                        SCENTED CANDLES
                     </p>
                     <p className="text-center fw-normal fs-5 text-body-secondary">
                        I'm a paragraph. Click here to add your <br />own text and edit me.
                        It’s easy. Just click<br />
                        Edit Text or double click me to add your<br />owncontent and make
                        changes to the font.<br />
                        I’m a great place for you to tell a story and<br />let your users
                        know a little more about you.
                     </p>
                     <button type="button" className="btn btn-outline-secondary col-4">
                        Shop Candles
                     </button>
                  </div>
                  <div className="col-md-6 mt-3" style={{ height: '400px' }}>
                     <video autoPlay muted loop type="video/mp4" width="100%"
                        src="https://video.wixstatic.com/video/84770f_cb0fb3c6238146209f8c82ddcdeef77a/720p/mp4/file.mp4"></video>
                  </div>
               </div>
            </div>
            {/* Part three outerImg&Txt  */}
            <div className="container text-center" style={{ marginTop: '100px' }}>
               <div className="row">
                  <div
                     className="position-absolute mt-5 UpperImage"
                     style={{ height: '600px', width: '400px', backgroundColor: 'rgb(94, 94, 74)' }}
                  ></div>
                  <div className="position-relative col-md-6">
                     <img
                        src="https://static.wixstatic.com/media/c837a6_fb1cfceae8d442448d7ae3804c378046~mv2.jpg/v1/crop/x_0,y_354,w_4480,h_5873/fill/w_570,h_748,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pexels-meruyert-gonullu-7500302.jpg"
                        alt=""
                        style={{ height: '600px' }}
                     />
                  </div>

                  <div className="col-md-5" style={{ marginTop: '100px' }}>
                     <p className="text-center fs-2 fw-normal">
                        PROBIOTIC <br />
                        CLEANSING BARS
                     </p>
                     <p className="text-center fw-normal fs-5 text-body-secondary mt-5">
                        I'm a paragraph. Click here to add your <br />own text and edit me.
                        It’s easy. Just click<br />
                        Edit Text or double click me to add your<br />owncontent and make
                        changes to the font.<br />
                        I’m a great place for you to tell a story and<br />let your users
                        know a little more about you.
                     </p>
                     <Link to="shop">

                     <button type="button" className="btn btn-outline-secondary mt-5 col-4">
                        Shop Soap
                     </button>
                     </Link>
                  </div>
               </div>
            </div>
            {/* part Four */}
            <div
               className="OuterBox"
               style={{
                  height: 'auto',
                  width: '100%',
                  marginTop: '130px',
                  backgroundColor: 'rgb(215, 215, 203)',
               }}
            >
               <div className="txt">
                  <h1 className="text-center fw-semibold" style={{ letterSpacing: '8px' }}>
                     MOST POPULAR
                  </h1>
               </div>
               {/* carousel content */}
               <div className="d-flex flex-wrap justify-content-center mt-5">

                  <div className="card mt-2 " style={{ width: '18rem' }}>
                     <img src="https://static.wixstatic.com/media/c837a6_71cb6826e409476a8bf5fc808e5025a5~mv2.jpg/v1/fill/w_381,h_509,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_71cb6826e409476a8bf5fc808e5025a5~mv2.jpg" className="card-img-top" alt="..." />
                     <div className="card-body" style={{ backgroundColor: 'rgb(215, 215, 213)' }}>
                        <p className="card-text"> Levender
                           <br />
                           $70.4 <br />
                           <button type="button" className="btn btn-outline-secondary mt-3 col-12">
                              Buy Now 
                           </button> </p>
                     </div>
                  </div>

                  <div className="card ms-5 mt-2" style={{ width: '18rem' }}>
                     <img src="https://static.wixstatic.com/media/c837a6_33e611f654b84ee38aa5ae8de03bc995~mv2.jpg/v1/fill/w_381,h_509,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_33e611f654b84ee38aa5ae8de03bc995~mv2.jpg" className="card-img-top" alt="..." />
                     <div className="card-body" style={{ backgroundColor: 'rgb(215, 215, 213)' }}>
                        <p className="card-text"> Perl Powder
                           <br />
                           $85.50 <br />
                           <button type="button" className="btn btn-outline-secondary mt-3 col-12">
                              Buy Now
                           </button> </p>
                     </div>
                  </div>
                  <div className="card ms-5 mt-2" style={{ width: '18rem' }}>
                     <img src="https://static.wixstatic.com/media/c837a6_aa130046099845469457b74644824663~mv2.jpg/v1/fill/w_381,h_509,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_aa130046099845469457b74644824663~mv2.jpg" className="card-img-top" alt="..." />
                     <div className="card-body" style={{ backgroundColor: 'rgb(215, 215, 213)' }}>
                        <p className="card-text"> Coco & Sandelwood
                           <br />
                           $28.5 <br />
                           <button type="button" className="btn btn-outline-secondary mt-3 col-12">
                              Buy Now
                           </button> </p>
                     </div>
                  </div>
                  <div className="card ms-5 mt-2" style={{ width: '18rem' }}>
                     <img src="https://static.wixstatic.com/media/c837a6_e2ac14427adf46bda9a01b4a736fc5bf~mv2.jpg/v1/fill/w_381,h_509,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_e2ac14427adf46bda9a01b4a736fc5bf~mv2.jpg" className="card-img-top" alt="..." />
                     <div className="card-body" style={{ backgroundColor: 'rgb(215, 215, 213)' }}>
                        <p className="card-text">Aromatic Blend
                           <br />
                           $39.5 <br />
                           <button type="button" className="btn btn-outline-secondary mt-3 col-12">
                              Buy Now
                           </button> </p>
                     </div>
                  </div>

                  {/* Add other cards similarly */}
               </div>

            </div>
            {/* Part five */}
            <div className="mt-5">
               <div className="col-11" style={{ marginTop: '100px' }}>
                  <p className="text-center fs-2 fw-normal">
                     NATURALLY SIMPLE
                  </p>
                  <p className="text-center fw-normal fs-5 text-body-secondary mt-5">
                     I'm a paragraph. Click here to add your own text and edit me.
                     It’s easy. Just click<br />
                     Edit Text or double click me to add yourowncontent and make
                     changes to the font.<br />
                     I’m a great place for you to tell a story and<br />let your users
                     know a little more about you. <br />
                     <button type="button" className="btn btn-outline-secondary mt-5 col-3">
                        Our Story
                     </button>
                  </p>
               </div>
            </div>

            {/* part six */}
            <div className="mt-5 ">

               <div className="position-relative d-flex" style={{ justifyContent: 'center' }}>
                  <img src="https://static.wixstatic.com/media/c837a6_de863b1b8e35429c9732c20bec3f38be~mv2.jpg/v1/crop/x_0,y_78,w_2382,h_1434/fill/w_1090,h_655,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ruslan-bardash-K8iJtsWwAoE-unsplash1_edited.jpg" className="img-fluid" alt="" style={{ height: '524px', width: '872px' }} />
                  <div className="position-absolute top-50 start-40">
                     <img src="https://static.wixstatic.com/media/84770f_49a0e5cce26444fe8958a0c104c897e8~mv2.jpg/v1/crop/x_0,y_597,w_4275,h_5218/fill/w_635,h_775,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pexels-vlada-karpovich-6755866.jpg" className="img-fluid" alt="" style={{ height: '600px', width: '490px' }} />
                  </div>
               </div>

            </div>
            {/* Part Seven */}
            <div
               className="OuterBox"
               style={{
                  height: 'auto',
                  width: 'auto',
                  marginTop: '25rem',
                  backgroundColor: 'rgb(215, 215, 180)',
               }}
            >
               <div className="txt">
                  <h1 className="text-center fw-semibold" style={{ letterSpacing: '8px' }}>
                     THE FRAIS BLOG
                  </h1>
               </div>
               <div className="d-flex mt-5">

                  <div className="d-flex flex-wrap justify-content-center mt-5">
                     <div className="card ms-5" style={{ width: '18rem', cursor: 'pointer' }}>
                        <img src="https://static.wixstatic.com/media/c837a6_f395e41dff5e45eeb2252f4a02aa4698~mv2.jpg/v1/fill/w_336,h_449,fp_0.50_0.50,q_90,enc_auto/c837a6_f395e41dff5e45eeb2252f4a02aa4698~mv2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body" style={{ backgroundColor: 'rgb(215,215,180)' }}>
                           <p className="card-text">
                              <h4>Re-Using Candles</h4>
                              Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
                           </p>
                        </div>
                     </div>
                     <div className="card ms-5" style={{ width: '18rem', cursor: 'pointer' }}>
                        <img src="https://static.wixstatic.com/media/c837a6_80859edc14b34b8d9484a87f260e0ef5~mv2.jpg/v1/fill/w_338,h_449,fp_0.50_0.50,q_90,enc_auto/c837a6_80859edc14b34b8d9484a87f260e0ef5~mv2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body" style={{ backgroundColor: 'rgb(215,215,180)' }}>
                           <p className="card-text">
                              <h4>How to pick the right scent</h4>
                              Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
                           </p>
                        </div>
                     </div>
                     <div className="card ms-5" style={{ width: '18rem', cursor: 'pointer' }}>
                        <img src="https://static.wixstatic.com/media/c837a6_b462c5e2801d4f928b27eb720a0cb542~mv2.jpg/v1/fill/w_336,h_449,fp_0.50_0.50,q_90,enc_auto/c837a6_b462c5e2801d4f928b27eb720a0cb542~mv2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body" style={{ backgroundColor: 'rgb(215,215,180)' }}>
                           <p className="card-text">
                              <h4>5 ways to Take care of your candles</h4>
                              Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
                           </p>
                        </div>
                     </div>
                     <div className="card ms-5" style={{ width: '18rem', cursor: 'pointer' }}>
                        <img src="https://static.wixstatic.com/media/c837a6_fb1cfceae8d442448d7ae3804c378046~mv2.jpg/v1/crop/x_0,y_354,w_4480,h_5873/fill/w_570,h_748,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pexels-meruyert-gonullu-7500302.jpg" className="card-img-top" alt="..." />
                        <div className="card-body" style={{ backgroundColor: 'rgb(215,215,180)' }}>
                           <p className="card-text">
                              <h4>Aromatic Blend</h4>
                              Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-12 mt-5" >

                  <p className="text-center fw-normal fs-5 text-body-secondary">

                     <button type="button" className="btn btn-outline-secondary">
                        Learn More
                     </button>
                  </p>
               </div>
            </div>
         </div>
      </>
   )
}
export default Home