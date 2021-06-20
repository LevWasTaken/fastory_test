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
