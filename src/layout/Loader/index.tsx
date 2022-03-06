import React, { useContext } from 'react';
import { ApiResponse } from '../../types';
import { HousingContext } from '../../utils/context';

interface Props {
    children : React.ReactNode,
};

const Loader = ({ children }: Props): JSX.Element => {
    const lodgingsResponse: ApiResponse | null = useContext(HousingContext);
    const isLoading = lodgingsResponse?.loading;


    return (
        <>
            {isLoading === undefined || isLoading ? 
                (<div className="loader-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                )
                :
                (
                    <>
                        { children }
                    </>
                )
            }
        </>
        
    );
};

export default Loader;