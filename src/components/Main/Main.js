import React from 'react'
import Logo from "../images/favicon.png"
import {Journal, Cloud, PencilSquare, Trash} from "react-bootstrap-icons";
import {Link} from "react-router-dom"

const Main = () => {

    return (
        <>
        <br />
        <div className="px-4 py-5 my-5 text-center">
    <img className="d-block mx-auto mb-4" src={Logo} alt="" width="72" height="57" />
    <h1 className="display-5 fw-bold">O-NoteBook</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Quickly save your <Journal />&nbsp;notes on on the <Cloud />&nbsp;clou, <PencilSquare />&nbsp;update and  <Trash />&nbsp;delete your notes online, with this powerfull tool O-NoteBook.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link className="btn btn-primary btn-lg px-4 gap-3" to="/notes" >Start Writing Notes</Link>
        <a className="btn btn-outline-secondary btn-lg px-4" href="https://github.com/abindent"><i className="bi bi-github"></i>&nbsp;Github</a>
      </div>
    </div>
  </div>
<br />
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
        <symbol id="people-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
      </symbol>
      <symbol id="toggles2" viewBox="0 0 16 16">
        <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z"/>
        <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z"/>
        <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
     </symbol>
        </svg>
        <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Features and Featured</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
          <div className="feature col">
          <div className="feature-icon bg-primary bg-gradient">
            <svg className="bi2" width="1em" height="1em"><use xlinkHref="#toggles2"/></svg>
          </div>
          </div>
            <h2>About OpenSource</h2>
            <p>OpenSource is the free source of HTML CSS and JAVA Script based Games.
            In this website you will get many interesting and exciting games. As a team of passionate gaming enthusiasts, OpenSource is dedicated to celebrating the gaming community. </p>
            <a href="https://osourcegames.firebaseapp.com" className="btn btn-primary icon-link">
            <i className="bi bi-box-arrow-up-right"></i>&nbsp;Visit       
            </a>
          </div>
          <div className="feature col">
          <div className="feature-icon bg-primary bg-gradient">
             <svg className="bi2" width="1em" height="1em"><use xlinkHref="#people-circle"/></svg>
          </div>
            <h2>Auth</h2>
            <p >Safe and secure signup, login , logout.<br />Very easy to authenticate.</p><br /><br /><br /><br />
            <Link to="/signup" className="btn btn-primary icon-link">
            <i className="bi bi-person-plus-fill"></i>&nbsp;SingUp         
            </Link>
          </div>
          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient">
            <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi2 bi-journal" viewBox="0 0 16 16">
              <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
              <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                </svg>
            </div>
            <h2>Notes</h2>
            <p>Keep your notes saved and secured in the cloud with OpenSourceGame's new O-NoteBook. It is very easy and reliable, made using ReactJs, MongoDB, Express, NodeJs and Bootstrap.</p><br /><br />
            <Link to="/notes" className="btn btn-primary icon-link">
            <i className="bi bi-pen"></i>&nbsp;Start Writing Notes 
           </Link>
          </div>
        </div>
      </div>
    
        </div>
        </>
    )
}

export default Main
