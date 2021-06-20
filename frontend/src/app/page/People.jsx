import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel'
import axios from '../utils/Axios';
import PeopleDisplay from '../component/PeopleDisplay';
import "../css/People.css"
const People = () => {
    const [people, setPeople] = useState([]);
    const [response, setResponse] = useState(false)
    const treatAllResponse = (responses) => {
        if (responses) {
            let data = []
            data = responses.data.map((response) => { return response.results }).flat()
            return data
        }

    }
    const getAllDataFromServer = async () => {
        let dataFormatted = null;
        try {
            const resPeople = await axios.getAllPeople(localStorage.getItem('userName'), localStorage.getItem('password'));
            resPeople ? dataFormatted = treatAllResponse(resPeople) : dataFormatted = null
        } catch (e) {
            if (e.response) {
                console.log(e.response);
                alert("You're not a real jedi");
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

        return dataFormatted
    }
    const initDisplay = async () => {
        let dudeToDisplay;
        let people = await getAllDataFromServer();
        if (people) {
            dudeToDisplay = people.map((dude) => { return <PeopleDisplay data={dude}></PeopleDisplay> })
            setResponse(true)
        }
        setPeople(dudeToDisplay)
    }
    useEffect(() => {
        initDisplay();
    }, []);

    return (
        <>
            {response
                ?
                <div className="People">
                    <h1 className="title">People</h1>
                    <Carousel itemsToShow={3}>{people}</Carousel> </div> : <h1>Only true jedi can access knowledge...</h1>

            }
        </>
    )
}
export default People;