import React, { useState } from "react";



const Button = () =>{
    const [imgfr,setimgurl] = useState("https://cdn2.thecatapi.com/images/cie.jpg");
    const showMe = () => {
        fetch('https://api.thecatapi.com/v1/images/search')
        .then((res) => res.json())
        .then((data) => setimgurl(data[0].url))
     }
     
    return(
       <div>
         <img src={imgfr} alt="cat" className="w-80-m"/>
         <br/>
         <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-purple mt4 w-m-10 center" href="#0" onClick={showMe}>I am Bored</a>
       
       </div>
    )
}

export default Button;