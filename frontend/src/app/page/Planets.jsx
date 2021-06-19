import React, { useState, useEffect } from 'react';
import axios from '../utils/Axios';
import Carousel from 'react-elastic-carousel'
import PlanetsDisplay from '../component/PlanetsDisplay';
import "../css/Planets.css"

const Planets = () => {
    const [planets, setPlanets] = useState([]);
    
    const treatAllResponse = (responses) => {
        let data = []
        if (responses.data.length) {
            data = responses.data.map((response) => { return response.results }).flat()
        }
        return data
    }
    const getAllDataFromServer = async () => {
        let dataFormatted;
        const resPlanets = await axios.getAllPlanets();
        resPlanets ? dataFormatted = treatAllResponse(resPlanets) : dataFormatted = null
        return dataFormatted
    }
    const initDisplay = async () => {
        let planetsToDisplay;
        let planets = await getAllDataFromServer();
        console.log("planets",planets)
        if(planets) {
            planetsToDisplay = planets.map((planet) => { return <PlanetsDisplay data={planet}></PlanetsDisplay> })
        }
        console.log("planetsToDisplay",planetsToDisplay)
        setPlanets(planetsToDisplay)
    }
    useEffect(() => {
        initDisplay();
    }, []);

    console.log("PlanetsToDisplay",planets)
    return (
        <div className="Planets">
            {planets ? <Carousel itemsToShow={3}>{planets}</Carousel> : <></>}
        </div>
    )
}
export default Planets;