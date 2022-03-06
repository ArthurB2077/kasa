import React, { createContext } from 'react';
import { useFetchHousing } from '../hooks';
import { ApiResponse } from '../../types';

export const HousingContext = createContext<ApiResponse | null>(null);

interface Props {
    children : React.ReactNode
};

export const HousingProvider = ({ children }: Props ): JSX.Element => {
    const lodgingsResponse: ApiResponse = useFetchHousing();

    return(
        <HousingContext.Provider value={lodgingsResponse}>
            {children}
        </HousingContext.Provider>
    );
}; 