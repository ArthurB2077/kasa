import React, { createContext } from 'react';
import { useFetchHousing } from '../hooks';
import { ApiResponse } from '../../types';

export const HousingContext = createContext<ApiResponse["housings"] | []>([]);

interface Props {
    children : React.ReactNode
};

export const HousingProvider = ({ children }: Props ): JSX.Element => {
    const {housings, loading }: ApiResponse = useFetchHousing();

    return(
        <>
            {!loading &&
                <HousingContext.Provider value={housings}>
                    {children}
                </HousingContext.Provider>
            }
        </>
    );
}; 