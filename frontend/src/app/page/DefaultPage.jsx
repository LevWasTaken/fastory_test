import React from 'react';
import CustomSelectSearch from '../component/CustomSelectSearch';


const DefaultPage =
    (
        {
            Page
        }
    ) => {
        const options = [
            { name: 'People', value: 'people' },
            { name: 'Planets', value: 'planets' },
            { name: 'Species', value: 'species' },
            { name: 'Starships', value: 'starships' },
            { name: 'Vehicles', value: 'vehicles' },
        ];

        return (
            <div className="DefaultPage">
                <CustomSelectSearch options={options}/>
                <div className="PageContent">
                    <Page />
                </div>
            </div>
        )
    }
export default DefaultPage;