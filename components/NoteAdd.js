import React, { useState } from 'react';
import { Label, TextInput, Textarea, Button } from "flowbite-react";
import { PlusCircle } from "react-bootstrap-icons";

const NoteAdd = ({ addNote, showAlert }) => { 
  const [note, setNote] = useState({title: "", description: "", tag: ""})
  const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
        showAlert("Note Added Successfully", "success")
    } 
   
  const onChange = (e)=>{
          setNote({...note, [e.target.name]: e.target.value})
    }

  return (
   
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
      <Button type="submit" onClick={handleClick} disabled={note.title.length<3 || note.description.length<5}><PlusCircle className="text-md mr-2"/>Create Note</Button>
    </form>
)  
}

export default NoteAdd; 
