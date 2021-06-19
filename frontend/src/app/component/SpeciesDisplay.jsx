import React from 'react';
import '../css/SpeciesDisplay.css'
const SpeciesDisplay = (data) => {
    data = data.data
    return (
        <div className="SpeciesDisplay">
            
            <div className="name">{data.name}</div>
            <div className="characteristics">
                <span>Characteristics</span>
                <div className="info">Classification : {data.classification} </div>
                <div className="info">Designation : {data.designation} </div>
                <div className="info">Average height : {data.average_height}</div>
                <div className="info">Skin colors : {data.skin_colors}</div>
                <div className="info">Hair colors : {data.hair_colors}</div>
                <div className="info">Eye colors : {data.eye_colors}</div>
                <div className="info">Average lifespan : {data.average_lifespan}</div>
                <div className="info">Language : {data.language}</div>
            </div>
            
        </div>
    )
}
export default SpeciesDisplay;