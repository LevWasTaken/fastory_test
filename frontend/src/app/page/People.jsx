import React from 'react';
import { useLocation } from 'react-router-dom';
import PeopleDisplay from '../component/PeopleDisplay';
const People = () => {
    const location = useLocation()
    const state = location.state
    let peopleToDisplay = state.map((people) => {return <PeopleDisplay data={people}></PeopleDisplay>})
    console.log('location',location)
    return (
        <div className="People">
            {peopleToDisplay}
        </div>
    )
}
export default People;