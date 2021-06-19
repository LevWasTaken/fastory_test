import React from 'react';
import '../css/PeopleDisplay.css'
const PeopleDisplay = (data) => {
    data = data.data
    return (
        <div className="PeopleDisplay">
           
            <div className="name">{data.name}</div>
            <div className="characteristics">
                <span>Characteristics</span> 
                <div className="info">Height : {data.height} </div>
                <div className="info">Mass : {data.mass} </div>
                <div className="info">Hair color : {data.hair_color}</div>
                <div className="info">Skin color : {data.skin_color}</div>
                <div className="info">Eye color : {data.eye_color}</div>
                <div className="info">Birth year : {data.birth_year} </div>
                <div className="info">Gender : {data.gender}</div>
            </div>
        </div>
    )
}
export default PeopleDisplay;