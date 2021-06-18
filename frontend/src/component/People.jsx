import axios from '../utils/Axios';
import React, { useState } from 'react';

function People() {

    const [id, setId] = useState(0)

    const handleOnChange = (e) => {
        setId(e.target.value)
    }

    const getPeopleFromServer = async () => {
        console.log(id)
        console.log(snapshot.value)
        const res = await axios.getPeopleById(idPeople);
        if (res) {
            console.log(res)
        }
        else {
            console.log("Connexion impossible, veuillez réessayer");
        }
    }

    const getAllPeopleFromServer = async (id) => {
        const res = await axios.getAllPeople();
        if (res) {
            console.log(res)
        }
        else {
            console.log("Connexion impossible, veuillez réessayer");
        }
    }

    return (
        <div className="People" >
            <h1>JEANVALJEAN</h1>
                <input type="text" onChange={handleOnChange} />    
            <button onClick={getPeopleFromServer}>chercher par id</button>
            <button onClick={getAllPeopleFromServer}>tout chercher</button>
        </div>
    );
}

export default People;