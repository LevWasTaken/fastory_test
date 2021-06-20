import React, { useState } from 'react';
import axios from '../utils/Axios';

import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import '../css/Login.css'

const Connexion = () => {

    const history = useHistory();

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const submit = async () => {
        try {
            const res = await axios.login(userName, password);
            if (res) {
                localStorage.setItem('userName', userName)
                localStorage.setItem('password', password)
                history.push({
                    pathname: '/'
                })
            }

        } catch (e) {
            if (e.response) {
				console.log(e.response);
				alert("A real Jedi should put Luke as username and dadSucks as password");
			}
			else if (e.request) {
				console.log(e.request);
				alert("No server response, try later");
			}
			else {
				console.log(e);
				alert("Unknown error");
			}
        }

    }
    let pw = localStorage.getItem('password')
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
                    <div className="form-group">
                        <label>User Name</label>
                        <input onChange={handleUserName} type="text" className="form-control" placeholder="Enter email"></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input onChange={handlePassword} type="text" className="form-control" placeholder="Password"></input>
                    </div>
                    <Button onClick={submit} size="sm" variant="outline-primary">Submit</Button>
                </form>
            </div>
        </div>
    )
}
export default Connexion;