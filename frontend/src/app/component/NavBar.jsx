import React from 'react';
import CustomSelectSearch from './CustomSelectSearch';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { useHistory } from "react-router-dom";
import '../css/NavBar.css'
const NavBar = () => {
    
    const history = useHistory();

    const options = [
        { name: 'People', value: 'people' },
        { name: 'Planets', value: 'planets' },
        { name: 'Species', value: 'species' },
        { name: 'Starships', value: 'starships' },
        { name: 'Vehicles', value: 'vehicles' },
        { name: 'Films', value: 'films' }
    ];
    const redirect = () => {
        history.push({
            pathname: '/connexion'
        });
    }
    return (
        <div className="bar">
            
        <CustomSelectSearch options={options}></CustomSelectSearch>
        <div className="img-container"><a href="/"><img src="./baner.png"/></a></div>
        <Button onClick={redirect}>Connexion</Button>
        
        </div>
    )
}
export default NavBar;