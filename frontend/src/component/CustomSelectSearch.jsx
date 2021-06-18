import axios from '../utils/Axios';
import React, { useState } from 'react';
import { useSelect } from 'react-select-search';
import '../css/CustomSelectSearch.css'

const CustomSelectSearch = ({ options, value, multiple, disabled }) => {
    const [snapshot, valueProps, optionProps] = useSelect({
        options,
        value,
        multiple,
        disabled,
    });

    const [id, setId] = useState(0)

    const handleOnChange = (e) => {
        setId(e.target.value)
    }

    const getDataByIdFromServer = async () => {
        console.log('snapshot', snapshot, 'valueProps', valueProps, 'optionProps', optionProps)
        console.log(snapshot.value)
        switch (snapshot.value) {
            case 'people':
                const res = await axios.getPeopleById(id);
                if (res) {
                    console.log(res)
                }
                else {
                    console.log("Connexion impossible, veuillez réessayer");
                }
                break
            default:
        }
    }

    const getAllDataFromServer = async () => {
        console.log('snapshot', snapshot, 'valueProps', valueProps, 'optionProps', optionProps)
        console.log(id)
        console.log(snapshot.value)
        switch (snapshot.value) {
            case 'people':
                const res = await axios.getAllPeople();
                if (res) {
                    console.log(res)
                }
                else {
                    console.log("Connexion impossible, veuillez réessayer");
                }
                break
            default:
        }
    }

    // const getPeopleFromServer = async () => {
    //     switch(snapshot.value) {
    //         case 'people':

    //             break
    //         case 'planets':
    //             break
    //         case 'species':
    //             break
    //         case 'starships':
    //             break
    //         case 'vehicles':
    //             break
    //     }
    //     const res = await axios.getPeopleById(idPeople);
    //     if (res) {
    //         console.log(res)
    //     }
    //     else {
    //         console.log("Connexion impossible, veuillez réessayer");
    //     }
    // }




    return (
        <div className="select-search">
            <div>
                <input type="text" onChange={handleOnChange} />
                <button className='btn btn-light' {...valueProps}>{snapshot.value}</button>

                {snapshot.focus && (
                    <div className="truc">
                        <ul className="list-group">
                            {snapshot.options.map((option) => (
                                <li className="list-group-item" key={option.value}>
                                    <button className='btn btn-light' {...optionProps} value={option.value}>{option.name}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <button className="btn btn-light" onClick={getDataByIdFromServer}>Get {snapshot.displayValue} by id</button>
                <button className="btn btn-light" onClick={getAllDataFromServer}>Get All {snapshot.displayValue}</button>
            </div>
        </div>
    );
};
export default CustomSelectSearch
