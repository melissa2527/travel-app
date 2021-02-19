import React from 'react';
import {placesData} from '../Places/placesData'

export const Countries = () => {
    return (
        <>
            {placesData.map((name, index) => 

                <h1>{name.name}</h1>
            )}
   </>
    )
}
