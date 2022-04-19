import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import { Label, TextInput, Textarea, Button } from "flowbite-react";
import { PencilSquare } from "react-bootstrap-icons";

const Note = ({ showAlert })=>{
  const host = process.env.NEXT_PUBLIC_API_HOST 
  const router = useRouter()
  const [notes, setNotes] = useState([])
  const [note, setNote] = useState({title: "", description: "", tag: ""}) 
  function createMarkup(c) {
      return {__html: c};
    }
  
      // Edit a Note
  const editNote = async (title, description, tag) => {
      // API Call 
      const response = await fetch(`${host}/api/notes/update/${router.query}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify({title, description, tag})
      });

    }

  const handleClick = (e)=>{
        e.preventDefault();
        editNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
        router.push("/notes")
        showAlert("Note Updated Successfully", "success")
    } 
   
  const onChange = (e)=>{
          setNote({...note, [e.target.name]: e.target.value})
    } 

// Get all Notes
  const getNotes = async () => {
      // API Call 
      const response = await fetch(`${host}/api/notes/note/${router.query}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem("token")
        }
      });
      const json = await response.json() 
      setNotes(json)
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
       <title>Note {notes.title} - ONoteBook</title>
 
       <meta name="description" content="Edit your note." />

       <link rel="icon" href="/favicon.png" />
      
   </Head>
      <h2 className="text-2xl font-bold text-blue-700 dark:text-[silver] text-center">{notes.title}</h2>
     <div className="py-3 px-3" dangerouslySetInnerHTML={createMarkup(notes.description)}></div>

<form className="flex flex-col gap-4 px-4 py-4">
    <h2 className="text-2xl text-black dark:text-[silver] font-bold text-center">Add a Note</h2>
    <div>
      <Label
        className="mb-2 block"
        htmlFor="title"
      >
      Title
     </Label>
     <TextInput
       id="title"
       name="title"
       type="text"
       placeholder="Enter the title of your note."
       value={note.title}
       onChange={onChange} 
       required={true}
     />
   </div>
    <div>
      <Label
        className="mb-2 block"
        htmlFor="description"
      >
      Description
     </Label>
     <Textarea
       className="px-1 py-1"
       id="description"
       name="description"
       type="text"
       placeholder="Write your note (You can also use html code)."
       rows={4}
       value={note.description}
       onChange={onChange} 
       required={true}
     />
   </div>
    <div>
      <Label
        className="mb-2 block"
        htmlFor="tag"
      >
      Tags
     </Label>
     <TextInput
       id="tag"
       name="tag"
       type="text"
       placeholder="Enter some cool tags for your note."
       value={note.tag}
       onChange={onChange} 
       required={true}
     />
   </div>
      <Button type="submit" onClick={handleClick} disabled={note.title.length<3 || note.description.length<5}><PencilSquare className="text-md mr-2"/>Edit Note</Button>
    </form>
   </div>
  )
}

export default Note;