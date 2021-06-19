import React from 'react';
import '../css/StarshipsDisplay.css'
const StarshipsDisplay = (data) => {
    data = data.data
    return (
        <div className="StarshipsDisplay">
            <div className="name">{data.name}</div>
            <div className="characteristics">
                <span>Characteristics</span>
            <div className="info">model : {data.model} </div>
            <div className="info">manufacturer : {data.manufacturer} </div>
            <div className="info">cost_in_credits : {data.cost_in_credits}</div>
            <div className="info">length : {data.length}</div>
            <div className="info">max_atmosphering_speed : {data.max_atmosphering_speed}</div>
            <div className="info">crew : {data.crew}</div>
            <div className="info">passengers : {data.passengers}</div>
            <div className="info">cargo_capacity : {data.cargo_capacity}</div>
            <div className="info">consumables : {data.consumables}</div>
            <div className="info">hyperdrive_rating : {data.hyperdrive_rating}</div>
            <div className="info">MGLT : {data.MGLT}</div>
            </div>
        </div>
    )
}
export default StarshipsDisplay;