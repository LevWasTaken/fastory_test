import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel'
import axios from '../utils/Axios';
import PeopleDisplay from '../component/PeopleDisplay';
import "../css/People.css"
const People = () => {
    const [people, setPeople] = useState([]);
    const [response, setResponse] = useState(false)
    const treatAllResponse = (responses) => {
        console.log('responses',responses)
        if (responses) {
            let data = []
            data = responses.data.map((response) => { return response.results }).flat()
            return data
        }

    }
    const getAllDataFromServer = async () => {
        let dataFormatted = null;
        const resPeople = await axios.getAllPeople();
        resPeople ? dataFormatted = treatAllResponse(resPeople) : dataFormatted = null
        return dataFormatted
    }
    const initDisplay = async () => {
        let dudeToDisplay;
        let people = await getAllDataFromServer();
        console.log("people", people)
        if (people) {
            dudeToDisplay = people.map((dude) => { return <PeopleDisplay data={dude}></PeopleDisplay> })
            setResponse(true)
        }
        console.log("dudeToDisplay", dudeToDisplay)
        setPeople(dudeToDisplay)
    }
    useEffect(() => {
        initDisplay();
    }, []);

    console.log("peopleToDisplay", people)
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