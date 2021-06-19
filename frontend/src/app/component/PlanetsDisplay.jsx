import React from 'react';
import '../css/PlanetsDisplay.css'
const PlanetsDisplay = (data) => {
    data = data.data
    return (
        <div className="PlanetsDisplay">

            <div className="name">{data.name}</div>
            <div className="characteristics">
                <span>Characteristics</span>
                <div className="info">Rotation period : {data.rotation_period} </div>
                <div className="info">Orbital period : {data.orbital_period} </div>
                <div className="info">Diameter : {data.diameter}</div>
                <div className="info">Climate : {data.climate}</div>
                <div className="info">Gravity : {data.gravity}</div>
                <div className="info">Terrain : {data.terrain}</div>
                <div className="info">Surface water : {data.surface_water}</div>
                <div className="info">Population : {data.population}</div>
            </div>
        </div>
    )
}
export default PlanetsDisplay;