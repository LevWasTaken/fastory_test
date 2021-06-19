import React from 'react';
import '../css/FilmsDisplay.css'
const FilmsDisplay = (data) => {
    data = data.data
    return (
        <div className="FilmsDisplay">
            <div className="name"> {data.title}</div>
            <div className="info">Episode : {data.episode_id} </div>
            <div className="opening">Opening crawl : {data.opening_crawl} </div>
            <div className="info">Director : {data.director}</div>
            <div className="info">Producer : {data.producer}</div>
            <div className="info">Release date : {data.release_date}</div>
        </div>
    )
}
export default FilmsDisplay;