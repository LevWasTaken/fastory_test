import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel'
import axios from '../utils/Axios';
import PeopleDisplay from '../component/PeopleDisplay';
import "../css/People.css"
const People = () => {
    const [people, setPeople] = useState([]);
    
    const treatAllResponse = (responses) => {
        let data = []
        if (responses.data.length) {
            data = responses.data.map((response) => { return response.results }).flat()
        }
        return data
    }
    const getAllDataFromServer = async () => {
        let dataFormatted;
        const resPeople = await axios.getAllPeople();
        resPeople ? dataFormatted = treatAllResponse(resPeople) : dataFormatted = null
        return dataFormatted
    }
    const initDisplay = async () => {
        let dudeToDisplay;
        let people = await getAllDataFromServer();
        console.log("people",people)
        if(people) {
            dudeToDisplay = people.map((dude) => { return <PeopleDisplay data={dude}></PeopleDisplay> })
        }
        console.log("dudeToDisplay",dudeToDisplay)
        setPeople(dudeToDisplay)
    }
    useEffect(() => {
        initDisplay();
    },[]);

    console.log("peopleToDisplay",people)
    return (
        <div className="People">
            {people ? <Carousel itemsToShow={3}>{people}</Carousel> : <></>}
        </div>
    )
}
export default People;