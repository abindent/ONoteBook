import React, {useEffect, useContext} from 'react'
import { Link, useLocation, useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';
import userContext from "../../context/users/userContext"

const NavBar = () => {
    const context = useContext(userContext);
    const { user, getUser } = context
    let location = useLocation()
    useEffect(() => {
        
    }, [location])

    let history = useHistory();
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        history.push("/login")
    }
 
    if (localStorage.getItem('token')) {
        getUser()
        //eslint-disable-next-line
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid"> 
                <Link className="navbar-brand" to="/">ONoteBook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbartoggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbartoggler">         
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/"?"active":""}`} aria-current="page" to="/"><i className="bi bi-house-fill"></i>&nbsp;Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/notes"?"active":""}`} to="/notes"><i className="bi bi-journal"></i>&nbsp;Notes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about"?"active":""}`} to="/about"><i className="bi bi-building"></i>&nbsp;About</Link>
                            </li>
                           {/* <li className="nav-item">
                                <a className="nav-link" href="https://opensourcegames.w3spaces.com/#contact" target="_blank" rel="noreferrer"><i className="bi bi-telephone-fill"></i>&nbsp;Contact</a>
                            </li> */} 
                         <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/contact"?"active":""}`}  to="/contact"><i className="bi bi-telephone-fill"></i>&nbsp;Contact</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token')? <><Link to="/signup"><Button variant="success"><i className="bi bi-person-plus-fill"></i>&nbsp;Signup</Button></Link> 
                           <Link to="/login"><Button variant="success" className="mx-2"><i className="bi bi-box-arrow-in-right"></i>&nbsp;Login</Button></Link> </>: <><p className="text-white mt-3 mx-2">Welcome {user.name}</p>&nbsp;<Button variant="success" onClick={handleLogout}><i className="bi bi-box-arrow-in-left"></i>&nbsp;Log Out</Button></>
    }
                            
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;
