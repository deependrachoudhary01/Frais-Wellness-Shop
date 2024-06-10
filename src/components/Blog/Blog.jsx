import React from "react";
import Blogcard from "./Blogcard";
export default function Blog(){
    return(
        <>
        <div id="Blog">
      <div className="h-100 mt-3 shopFavTxt">
        <h1 className="text-center fw-normal" style={{letterSpacing: '8px'}}>BLOG</h1>
        <p className="text-center fw-semibold" style={{letterSpacing: '1.5px'}}>
          Hey! It's a Blog of our Shop
        </p>
      </div>
      
      <div className="h-100 mt-3 shopFavTxt">
        <p className="text-center col-5 fw-semibold" style={{letterSpacing: '1.5px'}}>
          All Posts
        </p>
      </div>
    </div>
    {/* Blog Image Content */}
    <div className="d-flex flex-wrap justify-content-center ms-5 mt-5 cardBlock">
    <Blogcard AdminName="" FeedHead="Re-Using Candles" FeedPara="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
     Blogimage="https://static.wixstatic.com/media/c837a6_f395e41dff5e45eeb2252f4a02aa4698~mv2.jpg/v1/fill/w_454,h_681,fp_0.50_0.50,q_90,enc_auto/c837a6_f395e41dff5e45eeb2252f4a02aa4698~mv2.jpg" />
     <Blogcard AdminName="" FeedHead="How to pick the right scent" FeedPara="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
     Blogimage="https://static.wixstatic.com/media/c837a6_80859edc14b34b8d9484a87f260e0ef5~mv2.jpg/v1/fill/w_454,h_681,fp_0.50_0.50,q_90,enc_auto/c837a6_80859edc14b34b8d9484a87f260e0ef5~mv2.jpg" />
     <Blogcard AdminName="" FeedHead="Put together the perfect Holiday" FeedPara="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
     Blogimage="https://static.wixstatic.com/media/c837a6_d740ab5bf7234b73864df013d688d451~mv2.jpg/v1/fill/w_454,h_681,fp_0.50_0.50,q_90,enc_auto/c837a6_d740ab5bf7234b73864df013d688d451~mv2.jpg" />

    <Blogcard AdminName="" FeedHead="5 Ways To Take Care Of your Candles" FeedPara="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
     Blogimage="https://static.wixstatic.com/media/c837a6_b462c5e2801d4f928b27eb720a0cb542~mv2.jpg/v1/fill/w_454,h_657,fp_0.50_0.50,q_90,enc_auto/c837a6_b462c5e2801d4f928b27eb720a0cb542~mv2.jpg" />    
     <Blogcard AdminName="" FeedHead="How to hand make your own Soap?" FeedPara="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
     Blogimage="https://static.wixstatic.com/media/c837a6_f793d33e8cdb4937a094525717f38ab6~mv2.jpg/v1/fill/w_454,h_681,fp_0.50_0.50,q_90,enc_auto/c837a6_f793d33e8cdb4937a094525717f38ab6~mv2.jpg" />
     <Blogcard AdminName="" FeedHead="The Remedis that make us" FeedPara="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
     Blogimage="https://static.wixstatic.com/media/c837a6_a003630a3f0a4412b0058cabf3b2944e~mv2.jpg/v1/fill/w_454,h_539,fp_0.50_0.50,q_90,enc_auto/c837a6_a003630a3f0a4412b0058cabf3b2944e~mv2.jpg" />
</div>
        </>
    )
}