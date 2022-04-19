import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

const Navbar = ({setMode, showAlert, user}) => {
  const router = useRouter()
  const [toggle, setToggle] = useState(false)

  const toggleMode = ()=>{
      if(!localStorage.getItem("theme")){
       localStorage.setItem("theme", "light")
       setMode("light")
    }
      if(!(localStorage.theme==="dark")){
          localStorage.setItem("theme", "dark");
          document.getElementById("__next").classList.add("dark") 
          document.getElementById("theme-toggle-dark-icon").classList.add("hidden")
          document.getElementById("theme-toggle-light-icon").classList.remove("hidden")
          setMode("dark")
          showAlert("Dark mode has been enabled", "success")
    }
    else{
        localStorage.setItem("theme", "light")
        document.getElementById("__next").classList.remove("dark") 
          document.getElementById("theme-toggle-dark-icon").classList.remove("hidden")
          document.getElementById("theme-toggle-light-icon").classList.add("hidden")
          setMode("light")
          showAlert("Light mode has been enabled", "success")
    }
   
    }
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        router.push("/")
        showAlert("Successfully Logged out", "success")  
    }



  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-slate-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center">
            <image src="/favicon.png"  className="h-6 sm:h-9" alt="ONoteBook" />
            <span className="ml-3 self-center text-xl font-semibold whitespace-nowrap dark:text-white">ONoteBook</span>
          </a>
          <button onClick={() => setToggle(!toggle)} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </button>
          <div className={`${toggle ? "block" : "hidden"} w-full md:block md:w-auto`} id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link href={"/"}><a className={`${router.pathname === "/"? "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" : "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}`}>Home</a></Link>
              </li>
              <li>
                <Link href={"/about"}><a className={`${router.pathname === "/about"? "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" : "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}`}>About</a></Link>
              </li>
              <li>
                <Link href={"/notes"}><a className={`${router.pathname === "/notes"? "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" : "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}`}>Notes</a></Link>
              </li>
              <li>
                <Link href={"/contact"}><a  className={`${router.pathname === "/contact"? "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" : "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}`}>Contact</a></Link>
              </li>
{user ? <li><Link href={"/dashboard"}><a  className={`${router.pathname === "/dashboard"? "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" : "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}`}>Dashboard</a></Link></li>
: <></>}
{!user ? <li className="ml-2 space-x-2"> <Link href={"/login"}><button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 rounded">Login
</button></Link>
<Link href={"/signup"}><button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 rounded">SignUp
</button></Link></li> : <li className="ml-2 md:ml-2 md:-mt-1"> <button type="button" onClick={handleLogout} className="bg-green-500 hover:bg-green-700 text-white font-bold py-0.5 px-2 rounded">Logout
</button></li>}
<li onClick={toggleMode} className="mt-1 md:-mt-1 ml-4"><button type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm ">
<svg id="theme-toggle-dark-icon" className="w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>

  <svg id="theme-toggle-light-icon" className="w-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" /></svg></button></li>
            </ul>
          </div>
         </div>
      </nav>

   )
}



export default Navbar;
