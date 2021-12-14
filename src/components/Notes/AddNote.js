import React, {useContext, useState} from 'react'
import {Form, Button} from "react-bootstrap"
import noteContext from "../../context/notes/noteContext"

const AddNote = (props) => {
    const context = useContext(noteContext)
    const {addNote} = context
 
    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
        props.showAlert("Note Added Successfully", "success")
    }
    const onChange = (e)=>{
          setNote({...note, [e.target.name]: e.target.value})
    }

    return (
     <>
      <div className="container my-3">
             <h1>Add a Note</h1>
             <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control id="title" name="title" type="text" placeholder="Enter Title Here" onChange={onChange} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter Description Here" id="description" name="description" rows={5} onChange={onChange}  />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Tag</Form.Label>
                    <Form.Control type="text" placeholder="Enter Tag Here" id="tag" name="tag" onChange={onChange}  />
                </Form.Group>

                
                
                <Button variant="primary" onClick={handleClick} disabled={note.title.length<3 || note.description.length<5} type="submit">
                <i className="bi bi-plus-circle"></i>&nbsp;Add Note
                </Button>
             </Form>
        </div>
        </>
    )
}

export default AddNote
