import React from 'react';
import '../css/StarshipsDisplay.css'
const StarshipsDisplay = (data) => {
    data = data.data
    return (
        <div className="StarshipsDisplay">
            <div className="name">{data.name}</div>
            <div className="characteristics">
                <span>Characteristics</span>
            <div className="info">Model : {data.model} </div>
            <div className="info">Manufacturer : {data.manufacturer} </div>
            <div className="info">Cost in credits : {data.cost_in_credits}</div>
            <div className="info">Length : {data.length}</div>
            <div className="info">Max atmosphering speed : {data.max_atmosphering_speed}</div>
            <div className="info">Crew : {data.crew}</div>
            <div className="info">Passengers : {data.passengers}</div>
            <div className="info">Cargo Capacity : {data.cargo_capacity}</div>
            <div className="info">Consumables : {data.consumables}</div>
            <div className="info">Vehicle class : {data.vehicles_class}</div>
            </div>
        </div>
    )
}
export default StarshipsDisplay;