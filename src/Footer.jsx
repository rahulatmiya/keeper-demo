import React from "react";
import "./styles.css";

const currentYear = new Date().getFullYear();

function Footer(){
    return <p>Copyright @{currentYear}</p>
}


export default Footer;