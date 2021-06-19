import React from 'react';
import '../css/PeopleDisplay.css'
const PeopleDisplay = (data) => {
    data = data.data
    return (
        <div className="PeopleDisplay">
            <div className="name">name : {data.name}</div>
            <div className="height">height : {data.height} </div>
            <div className="mass">mass : {data.mass} </div>
            <div className="hair_color">hair color : {data.hair_color}</div>
            <div className="skin_color">skin color : {data.skin_color}</div>
            <div className="eye_color">eye color : {data.eye_color}</div>
            <div className="birth_year">birth year :{data.birth_year} </div>
            <div className="gender">gender : gender</div>
        </div>
    )
}
export default PeopleDisplay;