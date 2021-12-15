import React from 'react'
import emailjs, { init } from "emailjs-com";
import { Form, Button } from "react-bootstrap"
import Swal from "sweetalert2";

const Contact = () => {
    init("user_CoAIQtaI8r3AdZh3ZIYAw");
    const SERVICE_ID = "service_kgmka0a";
    const TEMPLATE_ID = "template_ncnqz1f";
    const USER_ID = "user_CoAIQtaI8r3AdZh3ZIYAw";
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: "succes",
                    title: "Message Sent Succesfully."
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: "error",
                    title: "Ooops, something went wrong",
                    text: error.text,
                })
            });
        e.target.reset()
    };
    return (
        <div>
            <br /><br /><br /><br />
            <div className="container">
                <h1><b>Contact Us</b></h1>
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Sinchan Maitra" name="name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com"  name="email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label>Phone No. (With Country Code)</Form.Label>
                        <Form.Control type="text" placeholder="+1234567" name="phone"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="message">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea" rows={3} name="message" />
                    </Form.Group>
                    <Button type="submit" variant="primary">Submit</Button>
                </Form>
            </div>
        </div>
    )
}

export default Contact
