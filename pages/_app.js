import React, {useState, useEffect} from "react";
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar, Footer } from "../components/index"

import { ToastContainer, toast } from 'react-toastify';

function MyApp({  Component, pageProps}) {
 
 
 const [mode, setMode] = useState("light")
 const [user, setUser] = useState(null) 
 const showAlert = (message, type)=>{
    toast(message, {
        position: toast.POSITION.TOP_LEFT,
        type: type
      })
}
const host = process.env.NEXT_PUBLIC_API_HOST
      
    // Get the User
const getUser = async () => {
      // API Call       
      const response = await fetch(`${host}/api/auth/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem("token")
        }
      });
     
      // Converting response into json
      const json = await response.json()
      setUser(json)
    }

 useEffect(() => {
     if(localStorage.theme==="dark"){
          document.getElementById("__next").classList.add("dark")
          document.getElementById("theme-toggle-dark-icon").classList.add("hidden")
          document.getElementById("theme-toggle-light-icon").classList.remove("hidden")
          setMode('dark') 
    }
   if (localStorage.getItem("token")) {
        getUser()
        //eslint-disable-next-line
        }
   else{
      setUser(null) 
   }
   
  }, [user, mode]);
return <>
   <Navbar setMode={setMode} className="sticky" showAlert={showAlert} user={user}/>
   <ToastContainer theme={mode} />
   <Component {...pageProps} showAlert={showAlert} user={user}/>

   <Footer />
</>
}   




export default MyApp