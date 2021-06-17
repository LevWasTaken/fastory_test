import axios from '../utils/Axios';
import React, { useState } from 'react';

function People() {

    const [idPeople, setIdPeople] = useState(1)

    const handleOnChange = () => {
        setIdPeople(idPeople)
    }

    const getPeopleFromServer = async () => {
        console.log()
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
                <input type="text" value={idPeople} onChange={handleOnChange} />    
            <button onClick={getPeopleFromServer}>chercher par id</button>
            <button onClick={getAllPeopleFromServer}>tout chercher</button>
        </div>
    );
}

export default People;