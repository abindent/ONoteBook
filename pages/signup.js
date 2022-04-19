import React, {useState, useEffect} from "react";
import { useRouter } from "next/router"
import Head from 'next/head'



export default function Login({showAlert}) {
  
const router = useRouter()
const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });

        const json = await response.json()

        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            router.push("/");
            showAlert("Account Created Succesfully", "success")
            window.location.reload()
        }
        else{
            showAlert("Account Creation Failed.", "error")
        }
    }
const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
useEffect(() => {
    if(localStorage.getItem('token')){
     router.push("/")
    }
}, [])

return (
 <div className="dark:bg-slate-700">
   <Head>
             <title>Login - ONoteBook</title>
        
            <meta name="description" content="Login to ONoteBook." />

            <link rel="icon" href="/favicon.png" />
      
   </Head>
<div className="flex justify-center py-10">
  <form onSubmit={handleSubmit} className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <input className="dark:bg-slate-700 dark:text-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name="name" placeholder="Enter Your Name" value={credentials.name}onChange={onChange} />
    </div>
    <div className="mb-4">
      <input className="dark:bg-slate-700 dark:text-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="email" placeholder="Enter Your Email Address" value={credentials.email}onChange={onChange} />
    </div>
    <div className="mb-4">
      <input className="dark:bg-slate-700 dark:text-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter Your Password" name="password" value={credentials.password} onChange={onChange}  />
    </div>
    <div className="mb-4">
      <input className="dark:bg-slate-700 dark:text-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cpassword" type="password" placeholder="Confirm Your Password" name="cpassword" value={credentials.cpassword} onChange={onChange}  />
    </div>
    <div className="flex items-center justify-between">
      <button type="submit" disabled={credentials.name.length < 3 || credentials.password.length < 5 || credentials.password.length !== credentials.cpassword.length} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer opacity-100 disabled:opacity-25 disabled:cursor-not-allowed" >
        Sign Up
      </button>
    </div>
  </form>
</div>
</div>
  
)

}