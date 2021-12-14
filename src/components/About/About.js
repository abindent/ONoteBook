import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

const About = () => {
    return (
        <div className="container"><br /><br /><br /><br /><br />
        <Accordion defaultActiveKey="0">
     <Accordion.Item eventKey="0">
       <Accordion.Header>About OpenSource</Accordion.Header>
       <Accordion.Body>
        OpenSource is the free source of HTML CSS and JAVA Script based Games.
   In this website you will get many interesting and exciting games. As a team of passionate gaming enthusiasts, OpenSource is dedicated to celebrating the gaming community. Our expansive content includes current news, recent releases and helpful guides, all of which are geared for our fellow gamers, novices and professionals alike. We're committed to enhancing your gaming experience. You can contact us for one-on-one support or browse our ever-expanding selection of articles and videos to find exactly what you're looking for. We're looking forward to hearing from you.
   
      </Accordion.Body>
     </Accordion.Item>
     <Accordion.Item eventKey="1">
       <Accordion.Header>About O-NoteBook</Accordion.Header>
       <Accordion.Body>
        It is a product of OpenSourceGames made with <a href="https://reactjs.org/" target="_blank" rel="noreferrer">reactjs</a>.<br />
        Save your notes in the cloud safely for free with O-NoteBook.
       </Accordion.Body>
     </Accordion.Item>
   </Accordion><br />
   <h1 className="text-center"><u><b>Main Site</b></u></h1>
   <div className="iframe-container"><iframe title="main-site" border="0" loading="lazy" src="https://osourcegames.firebaseapp.com"></iframe></div>
   
           </div>
    )
}

export default About
