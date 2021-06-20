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
        const resVehicles = await axios.getAllVehicles();
        resVehicles ? dataFormatted = treatAllResponse(resVehicles) : dataFormatted = null
        return dataFormatted
    }
    const initDisplay = async () => {
        let vehiclesToDisplay;
        let vehicles = await getAllDataFromServer();
        console.log("vehicles", vehicles)
        if (vehicles) {
            vehiclesToDisplay = vehicles.map((vehicle) => { return <VehiclesDisplay data={vehicle}></VehiclesDisplay> })
            setResponse(true)
        }
        console.log("vehiclesToDisplay", vehiclesToDisplay)
        setVehicles(vehiclesToDisplay)
    }
    useEffect(() => {
        initDisplay();
    }, []);

    console.log("vehiclesToDisplay", vehicles)
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