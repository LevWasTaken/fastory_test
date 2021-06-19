import React, { useState, useEffect } from 'react';
import axios from '../utils/Axios';
import Carousel from 'react-elastic-carousel'
import SpeciesDisplay from '../component/SpeciesDisplay';
import "../css/Species.css"

const Species = () => {
    const [species, setSpecies] = useState([]);
    
    const treatAllResponse = (responses) => {
        let data = []
        if (responses.data.length) {
            data = responses.data.map((response) => { return response.results }).flat()
        }
        return data
    }
    const getAllDataFromServer = async () => {
        let dataFormatted;
        const resSpecies = await axios.getAllSpecies();
        resSpecies ? dataFormatted = treatAllResponse(resSpecies) : dataFormatted = null
        return dataFormatted
    }
    const initDisplay = async () => {
        let speciesToDisplay;
        let species = await getAllDataFromServer();
        console.log("species",species)
        if(species) {
            speciesToDisplay = species.map((specie) => { return <SpeciesDisplay data={specie}></SpeciesDisplay> })
        }
        console.log("SpeciesToDisplay",speciesToDisplay)
        setSpecies(speciesToDisplay)
    }
    useEffect(() => {
        initDisplay();
    }, []);

    console.log("SpeciesToDisplay",Species)
    return (
        <div className="Species">
            <h1 className="title">Species</h1>
            {species ? <Carousel itemsToShow={3}>{species}</Carousel> : <></>}
        </div>
    )
}
export default Species;