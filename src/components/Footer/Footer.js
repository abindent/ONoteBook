import React from 'react'
import Logo from "../images/favicon.png"
import {Link} from "react-router-dom"

const Footer = () => {
    const style = {
       position: "absolute"
    }
    return (
        <div>
            <div>
<footer style={style} className="container-fluid d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-dark">
   <p className="col-md-4 mb-0 text-white">&copy; 2022 O-NoteBook</p>

   <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none text-silver">
     <img src={Logo} width="15%" alt="Favicon" />
   </a>

   <ul className="nav col-md-4 justify-content-end text-decoration-none">
<li className="nav-item"><Link to="/" className="nav-link px-2 text-white-50">Home</Link></li> 
<li className="nav-item"><Link to="/about" className="nav-link px-2 text-white-50">About</Link></li>

<li className="nav-item"><a href="https://opensourcegames.w3spaces.com/#contact" className="nav-link px-2 text-white-50">Contact</a></li>
   </ul>
 </footer>
           </div>
        </div>
    )
}

export default Footer
