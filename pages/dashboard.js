import React, {useState, useEffect} from "react";
import {useRouter} from "next/router";
import {TextInput , Label} from "flowbite-react";
import Head from "next/head"

export default function Dashboard({ user, showAlert }) {

  useEffect(()=>{
   if(!localStorage.getItem("token")){
    router.push("/login")
    showAlert("You are not authenticated", "error")
     }
   
  })

  return (
  <div className="bg-white dark:bg-slate-800">
    <Head> 
       <title>{user?.name}'s Dashboard - ONoteBook</title>
 
       <meta name="description" content="A dashboard to control your account." />

       <link rel="icon" href="/favicon.png" />
      
   </Head>
 
    <form className="flex flex-col gap-4 px-3 justify-center align-center py-8">
       <h2 className="text-black text-center dark:text-white font-bold text-2xl underline">Your Account Details</h2>
  <div>
    <Label
      className="mb-2 block"
    >
      Your User Id
    </Label>
    <TextInput
      value={user?._id}
      disabled={true}
    />
  </div>
  <div>
    <Label
      className="mb-2 block"
    >
      Your Name
    </Label>
    <TextInput
      value={user?.name}
      disabled={true}
    />
  </div>
  <div>
    <Label
      className="mb-2 block"
    >
      Your Email
    </Label>
    <TextInput
      value={user?.email}
      disabled={true}
    />
  </div>
   <div>
    <Label
      className="mb-2 block"
    >
      Account Created at
    </Label>
    <TextInput
      value={user?.date}
      disabled={true}
    />
  </div>   
</form>
   </div>
  
)
}

