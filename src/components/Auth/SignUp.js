import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import { useHistory } from 'react-router-dom'

const SignUp = (props) => {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch("https://onotebook-backened.herokuapp.com/api/auth/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            history.push("/notes");
            props.showAlert("Account Created Succesfully", "success")
        }
        else {
            props.showAlert("Account Creation Failed", "danger")
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className="container">
            <br /><br /><br />
            <h1>SignUp</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" onChange={onChange} name="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email" onChange={onChange} name="email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
        </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Your Password" onChange={onChange} name="password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cpassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Your Password" onChange={onChange} name="cpassword" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit} disabled={credentials.name.length < 3 || credentials.password.length < 5 || credentials.password.length !== credentials.cpassword.length}>
                    Register
  </Button>
            </Form>
        </div>
    )
}

export default SignUp
