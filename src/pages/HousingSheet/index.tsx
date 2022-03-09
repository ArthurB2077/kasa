import { useContext, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Params } from 'react-router-dom';
import { HousingContext } from '../../utils/context';
import { Housing, ApiResponse } from '../../types';
import text from '../../assets/text';
import Description from "../../components/Description";
import Dropdown from "../../components/Dropdown";
import Gallery from "../../components/Gallery";
import Header from './../../layout/Header';
import Footer from './../../layout/Footer';
import Loader from './../../layout/Loader';

const HousingSheet = () => {
    const params: Readonly<Params<string>> = useParams();
    const lodgingsResponse: ApiResponse | null = useContext(HousingContext);
    const [matchingLodging, setMatchingLodging] = useState<Housing | null | undefined>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect((): void => {
        if(lodgingsResponse !== null && lodgingsResponse.housings.length > 0) {
            const match : Housing | undefined = lodgingsResponse.housings.find((hsg) => hsg.id === params.id);
            if (match) {
                setMatchingLodging(match);
            } else {
                setMatchingLodging(undefined);
            };
            if(lodgingsResponse) {
                const { loading } = lodgingsResponse;
                setIsLoading(loading);
            };
        };
    }, [lodgingsResponse, params]);
    
    return(
        <>
            {matchingLodging === undefined ?
                (
                    <Loader shouldLoad={isLoading}>
                        <Navigate to="/*" replace={true} />
                    </Loader>
                )
                :
                (
                    <Loader shouldLoad={isLoading}>
                        {matchingLodging !== null &&
                            <>  
                                <Header/>
                                <Gallery lodging={matchingLodging}/>
                                <Description lodging={matchingLodging}/>
                                <div className="housing-container-dropdowns">
                                    <Dropdown title={text.dropdownDescription} content={matchingLodging.description} size='sm'/>
                                    <Dropdown title={text.dropdownDescription} content={matchingLodging.equipments} size='sm'/>
                                </div>
                                <Footer/>
                            </>
                        }   
                    </Loader>
                )
            }
        </>
    
    );
};

export default HousingSheet;