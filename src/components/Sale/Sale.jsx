import React from "react";
import Card from "../Cards/Cards";
export default function Sale(){
    return(
        <>
        <div class="h-100 mt-3 shopFavTxt">
      <h1 class="text-center fw-normal" style={{letterspacing: '8px'}}>SALE</h1>
      <p class="text-center fw-semibold" style={{letterspacing: '1.5px'}}>
        Biggest Sale in our Shop
      </p>
    </div>
    
    <div className="d-flex ms-3 mt-5 flex-wrap justify-content-center cardBlock">
    <Card  Pname= "AromPnameatic Blend" Price="$ 85.5" image="https://static.wixstatic.com/media/c837a6_e2ac14427adf46bda9a01b4a736fc5bf~mv2.jpg/v1/fill/w_541,h_721,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_e2ac14427adf46bda9a01b4a736fc5bf~mv2.jpg"/>
    <Card Pname="Bitter Almond" Price="$ 78.7" image="https://static.wixstatic.com/media/c837a6_11f891559f33488e8157a306da01c2e9~mv2.jpg/v1/fill/w_541,h_721,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_11f891559f33488e8157a306da01c2e9~mv2.jpg"/>
    <Card Pname="Three Rose" Price="$ 14.5" image="https://static.wixstatic.com/media/c837a6_8422fe9a006245fe8d5162b528a6f087~mv2.jpg/v1/fill/w_541,h_721,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_8422fe9a006245fe8d5162b528a6f087~mv2.jpg"/>
 
    <Card Pname="Jasmine" Price="$ 55.30" image="https://static.wixstatic.com/media/c837a6_db11405f53d944bba7457f38b31b5638~mv2.jpg/v1/fill/w_541,h_721,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_db11405f53d944bba7457f38b31b5638~mv2.jpg"/>
    <Card Pname="Levender" Price="$ 70.80" image="https://static.wixstatic.com/media/c837a6_71cb6826e409476a8bf5fc808e5025a5~mv2.jpg/v1/fill/w_541,h_721,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_71cb6826e409476a8bf5fc808e5025a5~mv2.jpg"/>
    <Card Pname="Honey" Price="$ 24.00" image="https://static.wixstatic.com/media/c837a6_0095bfdca8b74838a09bb64d8b2f8564~mv2.jpg/v1/fill/w_541,h_721,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_0095bfdca8b74838a09bb64d8b2f8564~mv2.jpg"/>
  
    <Card Pname="Organic Beeswax" Price="$ 65.00" image="https://static.wixstatic.com/media/c837a6_4fd93169147b4bb8acf283aa5b2af5ff~mv2.jpg/v1/fill/w_541,h_721,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_4fd93169147b4bb8acf283aa5b2af5ff~mv2.jpg"/>
    <Card Pname="Star Anise &Lily" Price="$ 54.5" image="https://static.wixstatic.com/media/c837a6_e5e8a8c41b28457a8553c78547c35511~mv2.jpg/v1/fill/w_541,h_721,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_e5e8a8c41b28457a8553c78547c35511~mv2.jpg"/>
    <Card Pname="Coco & Sandelwoo" Price="$ 28.5" image="https://static.wixstatic.com/media/c837a6_aa130046099845469457b74644824663~mv2.jpg/v1/fill/w_541,h_721,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_aa130046099845469457b74644824663~mv2.jpg"/>
    </div>

        </>
    )
}