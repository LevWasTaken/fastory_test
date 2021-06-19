import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import '../css/Login.css'

const Connexion = () => {

    const history = useHistory();
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const redirect = () => {
        console.log(userName, password)
    }
    const handleUserName = (e) => {
        setUserName(e.currentTarget.value)
    }
    const handlePassword = (e) => {
        setPassword(e.currentTarget.value)
    }
    return (

        <div><h1>CONNEXION</h1>
            <div className="form-container">

                <form>
                    <div class="form-group">
                        <label>User Name</label>
                        <input onChange={handleUserName} type="text" class="form-control" placeholder="Enter email"></input>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input onChange={handlePassword} type="text" class="form-control" placeholder="Password"></input>
                    </div>
                    <Button onClick={redirect} size="sm" variant="outline-primary">Submit</Button>
                </form>
            </div>
        </div>
    )
}
export default Connexion;