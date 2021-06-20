import React, { useState, useEffect } from 'react';
import axios from '../utils/Axios';
import Carousel from 'react-elastic-carousel'
import PlanetsDisplay from '../component/PlanetsDisplay';
import "../css/Planets.css"

const Planets = () => {
    const [planets, setPlanets] = useState([]);
    const [response, setResponse] = useState(false)
    const treatAllResponse = (responses) => {
        let data = []
        if (responses.data.length) {
            data = responses.data.map((response) => { return response.results }).flat()
        }
        return data
    }
    const getAllDataFromServer = async () => {
        let dataFormatted;
        try {
            const resPlanets = await axios.getAllPlanets(localStorage.getItem('userName'), localStorage.getItem('password'));
            resPlanets ? dataFormatted = treatAllResponse(resPlanets) : dataFormatted = null
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
        let planetsToDisplay;
        let planets = await getAllDataFromServer();
        
        if(planets) {
            planetsToDisplay = planets.map((planet) => { return <PlanetsDisplay data={planet}></PlanetsDisplay> })
            setResponse(true)
        }

        setPlanets(planetsToDisplay)
    }
    useEffect(() => {
        initDisplay();
    }, []);

    return (
        <>
        {response
            ?
            <div className="Planets">
                <h1 className="title">Planets</h1>
                <Carousel itemsToShow={3}>{planets}</Carousel> </div> : <h1>Only true jedi can access knowledge...</h1>
             
    }
    </>
    )
}
export default Planets;