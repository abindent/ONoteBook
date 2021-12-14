import React, {useContext} from 'react'
import {Card }from "react-bootstrap"
import noteContext from "../../context/notes/noteContext"

const NoteItem = (props) => {
    const context = useContext(noteContext)
    const {deleteNote} = context
    const { note, updateNote } = props;
     return (
        <div className="col-md-4">
            <Card style={{ width: '18rem' }} className="mb-2" >
                    <Card.Body >
                        <Card.Title className="d-flex align-items-center">{note.title}<i className="bi bi-trash mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Note Deleted Successfully", "success")}}></i>
                        <i className="bi bi-pencil-square mx-2" onClick={()=>{updateNote(note); props.showAlert("Note Updated Successfully", "success");}}></i></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Tags: {note.tag}</Card.Subtitle>
                        <Card.Text><b>Body:</b> <br/>{note.description}</Card.Text>
                    </Card.Body>
            </Card>
        </div>
    )
}

export default NoteItem
