//import axios from '../utils/Axios';
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

    // const handleOnChange = (e) => {
    //     setId(e.target.value)
    // }

    // const [id, setId] = useState(0)
    // const getDataByIdFromServer = async () => {
    //     console.log('snapshot', snapshot, 'valueProps', valueProps, 'optionProps', optionProps)
    //     console.log(snapshot.value)
    //     switch (snapshot.value) {
    //         case 'people':
    //             const resPeople = await axios.getPeopleById(id);
    //             resPeople ? console.log(resPeople) : console.log("Connexion impossible, veuillez réessayer")
    //             break
    //         case 'planets':
    //             const resPlanets = await axios.getPlanetsById(id);
    //             resPlanets ? console.log(resPlanets) : console.log("Connexion impossible, veuillez réessayer")
    //             break
    //         case 'species':
    //             const resSpecies = await axios.getSpeciesById(id);
    //             resSpecies ? console.log(resSpecies) : console.log("Connexion impossible, veuillez réessayer")
    //             break
    //         case 'starships':
    //             const resStarships = await axios.getStarshipsById(id);
    //             resStarships ? console.log(resStarships) : console.log("Connexion impossible, veuillez réessayer")
    //             break
    //         case 'vehicles':
    //             const resVehicles = await axios.getVehiclesById(id);
    //             resVehicles ? console.log(resVehicles) : console.log("Connexion impossible, veuillez réessayer")
    //             break
    //         case 'films':
    //             const resFilms = await axios.getFilmsById(id);
    //             resFilms ? console.log(resFilms) : console.log("Connexion impossible, veuillez réessayer")
    //             break
    //         default:
    //             break
    //     }
    // }

    const redirectToDisplay = (page) => {
        history.push({
            pathname: '/' + page
        });
    }
    const handleClickAll = async () => {
        redirectToDisplay(snapshot.value)
    }

    return (
        <div>
            <div className="select-search">
                <div>
                    <Button variant="secondary" onClick={handleShow} {...valueProps}>Click To Filter</Button>
                    <Button variant="secondary" onClick={handleClickAll}>Get All {snapshot.displayValue}</Button>


                    {/* <input type="text" placeholder="Type id (People 1 is luke)" onChange={handleOnChange} />
                    <Button variant="secondary" onClick={getDataByIdFromServer}>Get {snapshot.displayValue} by id</Button> */}
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
