import React, { useState, useEffect } from 'react';
import axios from '../utils/Axios';
import Carousel from 'react-elastic-carousel'
import SpeciesDisplay from '../component/SpeciesDisplay';
import "../css/Species.css"

const Species = () => {
    const [species, setSpecies] = useState([]);
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
            const resSpecies = await axios.getAllSpecies(localStorage.getItem('userName'), localStorage.getItem('password'));
            resSpecies ? dataFormatted = treatAllResponse(resSpecies) : dataFormatted = null
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
        let speciesToDisplay;
        let species = await getAllDataFromServer();
        if(species) {
            speciesToDisplay = species.map((specie) => { return <SpeciesDisplay data={specie}></SpeciesDisplay> })
            setResponse(true)
        }
        setSpecies(speciesToDisplay)
    }
    useEffect(() => {
        initDisplay();
    }, []);

    return (
        <>
        {response
            ?
            <div className="Species">
                <h1 className="title">Species</h1>
                <Carousel itemsToShow={3}>{species}</Carousel> </div> : <h1>Only true jedi can access knowledge...</h1>
             
    }
    </>
    )
}
export default Species;