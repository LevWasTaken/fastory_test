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
        try {
            const resFilms = await axios.getAllFilms(localStorage.getItem('userName'), localStorage.getItem('password'));
            resFilms ? dataFormatted = treatAllResponse(resFilms) : dataFormatted = null
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
        let filmsToDisplay;
        let films = await getAllDataFromServer();
        if (films) {
            filmsToDisplay = films.map((film) => { return <FilmsDisplay data={film}></FilmsDisplay> })
            setResponse(true)
        }
        setFilms(filmsToDisplay)
    }
    useEffect(() => {
        initDisplay();
    }, []);

    return (
        <>
            {response
                ?
                <div className="Films">
                    <h1 className="title">Films</h1>
                    <Carousel itemsToShow={1}>{films}</Carousel> </div> : <h1>Only true jedi can access knowledge...</h1>

            }
        </>
    )
}
export default Films;