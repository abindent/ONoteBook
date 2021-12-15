import { useState } from "react"
import UserContext from "./userContext"

const UserState = (props) => {
    const host = "https://onotebook-backened.herokuapp.com"
    const userInitial = []
    const [user, setUser] = useState(userInitial)
  
    // Get all Notes
    const getUser = async () => {
      // API Call 
      const response = await fetch(`${host}/api/auth/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem("token")
        }
      });
      const json = await response.json() 
      setUser(json)
    }
  
   
    return (
      <UserContext.Provider value={{ user , getUser }}>
        {props.children}
      </UserContext.Provider>
    )
  
  }
  export default UserState;