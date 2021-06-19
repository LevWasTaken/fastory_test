import axios from '../utils/Axios';
import React, { useState } from 'react';
import { useSelect } from 'react-select-search';
import { useHistory } from "react-router-dom";
import '../css/CustomSelectSearch.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const CustomSelectSearch = ({ options, value, multiple, disabled }) => {

    const history = useHistory();

    const [snapshot, valueProps, optionProps] = useSelect({
        options,
        value,
        multiple,
        disabled,
    });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [id, setId] = useState(0)

    const handleOnChange = (e) => {
        setId(e.target.value)
    }

    const getDataByIdFromServer = async () => {
        console.log('snapshot', snapshot, 'valueProps', valueProps, 'optionProps', optionProps)
        console.log(snapshot.value)
        switch (snapshot.value) {
            case 'people':
                const resPeople = await axios.getPeopleById(id);
                resPeople ? console.log(resPeople) : console.log("Connexion impossible, veuillez réessayer")
                break
            case 'planets':
                const resPlanets = await axios.getPlanetsById(id);
                resPlanets ? console.log(resPlanets) : console.log("Connexion impossible, veuillez réessayer")
                break
            case 'species':
                const resSpecies = await axios.getSpeciesById(id);
                resSpecies ? console.log(resSpecies) : console.log("Connexion impossible, veuillez réessayer")
                break
            case 'starships':
                const resStarships = await axios.getStarshipsById(id);
                resStarships ? console.log(resStarships) : console.log("Connexion impossible, veuillez réessayer")
                break
            case 'vehicles':
                const resVehicles = await axios.getVehiclesById(id);
                resVehicles ?  console.log(resVehicles) : console.log("Connexion impossible, veuillez réessayer")
                break
            case 'films':
                const resFilms = await axios.getFilmsById(id);
                resFilms ?  console.log(resFilms) : console.log("Connexion impossible, veuillez réessayer")
                break
            default:
                break
        }
    }

    const treatAllResponse = (responses) => {
        console.log(responses)
        let data = []
        if(responses.data.length) {
            data = responses.data.map((response) => {return response.results}).flat()
        }
        return data
    }
    const redirectToDisplay = (page, responses) => {
        console.log("page", page, "réponses", responses)
        let dataFormatted = treatAllResponse(responses)
        history.push({
            pathname: '/' + page,
            state: dataFormatted
        });
    }
    const getAllDataFromServer = async () => {
        console.log('snapshot', snapshot, 'valueProps', valueProps, 'optionProps', optionProps)
        console.log(id)
        console.log(snapshot.value)
        switch (snapshot.value) {
            case 'people':
                const resPeople = await axios.getAllPeople();
                resPeople ? redirectToDisplay(snapshot.value, resPeople) : console.log("Connexion impossible, veuillez réessayer")
                break
            case 'planets':
                const resPlanets = await axios.getAllPlanets();
                resPlanets ? treatAllResponse(resPlanets) : console.log("Connexion impossible, veuillez réessayer")
                break
            case 'species':
                const resSpecies = await axios.getAllSpecies();
                resSpecies ? treatAllResponse(resSpecies) : console.log("Connexion impossible, veuillez réessayer")
                break
            case 'starships':
                const resStarships = await axios.getAllStarships();
                resStarships ? treatAllResponse(resStarships) : console.log("Connexion impossible, veuillez réessayer")
                break
            case 'vehicles':
                const resVehicles = await axios.getAllVehicles();
                resVehicles ? (treatAllResponse(resVehicles)) : console.log("Connexion impossible, veuillez réessayer")
                break
            case 'films':
                const resFilms = await axios.getAllFilms();
                resFilms ? treatAllResponse(resFilms) : console.log("Connexion impossible, veuillez réessayer")
                break
            default:
                break
        }
    }

    return (
        <div>
            <div className="select-search">
                <div>
                    <button className='btn btn-light' onClick={handleShow} {...valueProps}>{snapshot.value}</button>
                    <input type="text" placeholder="Type id (People 1 is luke)" onChange={handleOnChange} />

                    <button className="btn btn-light" onClick={getDataByIdFromServer}>Get {snapshot.displayValue} by id</button>
                    <button className="btn btn-light" onClick={getAllDataFromServer}>Get All {snapshot.displayValue}</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Choose type of data that you want to get</Modal.Title>
                </Modal.Header>
                <Modal.Body>{
                    <div className="truc">
                        {snapshot.options.map((option) => (
                            <Button variant="secondary" onClick={handleClose} {...optionProps} value={option.value}>{option.name}</Button>
                        ))}
                    </div>
                }</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export default CustomSelectSearch
