import React, { useState, useEffect } from 'react';
import axios from '../utils/Axios';
import Carousel from 'react-elastic-carousel'
import VehiclesDisplay from '../component/VehiclesDisplay';
import "../css/Vehicles.css"

const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);
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
            const resVehicles = await axios.getAllVehicles(localStorage.getItem('userName'), localStorage.getItem('password'));
            resVehicles ? dataFormatted = treatAllResponse(resVehicles) : dataFormatted = null
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
        let vehiclesToDisplay;
        let vehicles = await getAllDataFromServer();
        if (vehicles) {
            vehiclesToDisplay = vehicles.map((vehicle) => { return <VehiclesDisplay data={vehicle}></VehiclesDisplay> })
            setResponse(true)
        }
        setVehicles(vehiclesToDisplay)
    }
    useEffect(() => {
        initDisplay();
    }, []);
    return (
        <>
            {response
                ?
                <div className="Vehicles">
                    <h1 className="title">Vehicles</h1>
                    <Carousel itemsToShow={3}>{vehicles}</Carousel> </div> : <h1>Only true jedi can access knowledge...</h1>

            }
        </>
    )
}
export default Vehicles;