import React, { useState, useEffect }  from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {NoteAdd, NoteItem} from "../components/index";


export default function Notes({ showAlert }){
 const host = process.env.NEXT_PUBLIC_API_HOST
 const [notes, setNotes] = useState([])
 const router = useRouter()

 
  // Get all Notes
 const getNotes = async () => {
      // API Call 
      const response = await fetch(`${host}/api/notes/notes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem("token")
        }
      });
      const json = await response.json() 
      setNotes(json)
    }
   // Add a Note
 const addNote = async (title, description, tag) => {
      // API Call 
      const response = await fetch(`${host}/api/notes/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify({title, description, tag})
      });
  
      const note = await response.json();
      setNotes(notes.concat(note))
    }
     // Delete a Note
 const deleteNote = async (id) => {
      // API Call
      const response = await fetch(`${host}/api/notes/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem("token")
        }
      });
      const json = response.json(); 
      const newNotes = notes.filter((note) => { return note._id !== id })
      setNotes(newNotes)
    }
  
    
 useEffect(()=>{
   if(localStorage.getItem('token')){
      getNotes()      
      }
   else{
    router.push("/login")
    showAlert("You are not authenticated", "error")
    }
 
}, [notes])

 return (
 <div className="bg-white dark:bg-gray-800">
     <Head> 
       <title>Your Notes - ONoteBook</title>
 
       <meta name="description" content="Control your notes here." />

       <link rel="icon" href="/favicon.png" />
      
   </Head>
   
   
   <NoteAdd addNote={addNote} showAlert={showAlert}/>

  {notes.length===0 ? <p className="text-center text-black dark:text-[silver]">No notes to display</p> : <></>}
<div className="grid md:grid-cols-4 md:gap-5 sm:grid-cols-1 sm:gap-2">
  {notes.map((e) => {
               return <NoteItem key={e._id} note={e}  deleteNote={deleteNote} showAlert={showAlert}/>
                })}
   </div>

</div>
 )

}