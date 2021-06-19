import React, { useState, useEffect } from 'react';
import axios from '../utils/Axios';
import Carousel from 'react-elastic-carousel'
import StarshipsDisplay from '../component/StarshipsDisplay';
import "../css/Starships.css"

const Starships = () => {
    const [starships, setStarships] = useState([]);
    
    const treatAllResponse = (responses) => {
        let data = []
        if (responses.data.length) {
            data = responses.data.map((response) => { return response.results }).flat()
        }
        return data
    }
    const getAllDataFromServer = async () => {
        let dataFormatted;
        const resStarships = await axios.getAllStarships();
        resStarships ? dataFormatted = treatAllResponse(resStarships) : dataFormatted = null
        return dataFormatted
    }
    const initDisplay = async () => {
        let starshipsToDisplay;
        let starships = await getAllDataFromServer();
        console.log("starships",starships)
        if(starships) {
            starshipsToDisplay = starships.map((starship) => { return <StarshipsDisplay data={starship}></StarshipsDisplay> })
        }
        console.log("starshipsToDisplay",starshipsToDisplay)
        setStarships(starshipsToDisplay)
    }
    useEffect(() => {
        initDisplay();
    }, []);

    console.log("StarshipsToDisplay",starships)
    return (
        <div className="Starships">
            <h1 className="title">Starships</h1>
            {starships ? <Carousel itemsToShow={3}>{starships}</Carousel> : <></>}
        </div>
    )
}
export default Starships;