import React, {useState, createContext} from 'react';
import { useFetchHousing } from '../hooks';
import { ApiResponse } from '../../types';

export const HousingContext = createContext<ApiResponse["housings"] | null>(null);

type Props =  {
    children : React.ReactNode
}

export const HousingProvider = ({ children }: Props ) => {
    const {housings, loading, error}: ApiResponse = useFetchHousing();
    console.log("Provider", housings);

    return(
        <>
            {!loading &&
                <HousingContext.Provider value={housings}>{ children }</HousingContext.Provider>
            }
        </>
    );
}; 