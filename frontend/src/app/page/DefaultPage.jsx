import React from 'react';
import NavBar from '../component/NavBar';

const DefaultPage =
    (
        {
            Page
        }
    ) => {
        

        return (
            <div className="DefaultPage">
                <NavBar/>
                <div className="PageContent">
                    <Page />
                </div>
            </div>
        )
    }
export default DefaultPage;