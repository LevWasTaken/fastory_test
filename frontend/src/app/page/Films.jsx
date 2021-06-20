import React, { useState, useEffect } from 'react';
import axios from '../utils/Axios';
import Carousel from 'react-elastic-carousel'
import FilmsDisplay from '../component/FilmsDisplay';
import "../css/Films.css"

const Films = () => {
    const [films, setFilms] = useState([]);
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
        const resFilms = await axios.getAllFilms();
        resFilms ? dataFormatted = treatAllResponse(resFilms) : dataFormatted = null
        return dataFormatted
    }
    const initDisplay = async () => {
        let filmsToDisplay;
        let films = await getAllDataFromServer();
        console.log("films",films)
        if(films) {
            filmsToDisplay = films.map((film) => { return <FilmsDisplay data={film}></FilmsDisplay> })
            setResponse(true)
        }
        console.log("filmsToDisplay",filmsToDisplay)
        setFilms(filmsToDisplay)
    }
    useEffect(() => {
        initDisplay();
    }, []);

    console.log("FilmsToDisplay",films)
    return (
        <>
        {response
            ?
            <div className="Films">
                <h1 className="title">Films</h1>
                <Carousel itemsToShow={3}>{films}</Carousel> </div> : <h1>Only true jedi can access knowledge...</h1>
             
    }
    </>
    )
}
export default Films;