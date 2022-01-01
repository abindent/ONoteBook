import React, {useState} from "react";
import HttpsRedirect from 'react-https-redirect';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar, Footer, Home, About, Alert, Login, SignUp, Main, Contact } from "./components/index"
import MetaTags from "react-meta-tags"
import NoteState from "./context/notes/NoteState"
import UserState from "./context/users/UserState"

function App() {
    const [alert, setAlert] = useState(null)

    const showAlert = (message, type)=>{
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(()=>{setAlert(null)}, 4500); 
    }
    return (
      <HttpsRedirect>
        <NoteState>
         <UserState>
            <Router> 
            <NavBar/>
            <Alert alert={alert} />
            <div className="container">
                <Switch>                   
                    <Route path="/" exact><MetaTags><title>Home - O-NoteBook</title></MetaTags><Main /></Route>
                    <Route path="/notes" exact><MetaTags><title>Notes - O-NoteBook</title></MetaTags><Home showAlert={showAlert} /></Route>
                    <Route path="/about" exact><MetaTags><title>About - O-NoteBook</title></MetaTags><About /></Route>
                    <Route path="/contact" exact><MetaTags><title>Contact - O-NoteBook</title></MetaTags><Contact /></Route>
                   <Route path="/login" exact><MetaTags><title>Login - O-NoteBook</title></MetaTags><Login showAlert={showAlert} /></Route>
                    <Route path="/signup" exact><MetaTags><title>Register - O-NoteBook</title></MetaTags><SignUp showAlert={showAlert}/></Route>
                </Switch>
                </div>
                <Footer />
            </Router>
          </UserState>
            </NoteState>
        </HttpsRedirect>
    );
}

export default App;
