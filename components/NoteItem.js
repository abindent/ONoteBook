import React from 'react';
import Link from "next/link";
import { Trash, PencilSquare } from "react-bootstrap-icons";
import {Card } from "flowbite-react";

const NoteItem = (props)=>{    
   const { note, deleteNote, showAlert } = props;
   function createMarkup(c) {
      return {__html: c};
    }
   
   return ( 
<div className="py-3 ml-2">
    <Card className="max-w-sm sm:max-w-md mb-2">
    <h5 className="flex text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
   {note.title}  <Trash className="cursor-pointer mt-2 text-2xl md:text-sm font-semibold ml-3" onClick={()=>{deleteNote(note._id); showAlert("Note Deleted Successfully", "success")}}/><Link href={`note/edit?id=${note._id}`}><a><PencilSquare className="cursor-pointer mt-2 text-2xl md:text-sm font-semibold mx-2" /></a></Link>
   </h5>
      <p className="text-sm tracking-tight text-gray-400 dark:text-[silver]">
    Tags: {note.tag}
   </p>
  <div dangerouslySetInnerHTML={createMarkup(note.description)}></div>
  </Card>
</div>
   )

  }

export default NoteItem;