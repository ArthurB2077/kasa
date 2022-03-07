import { useContext, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Params } from 'react-router-dom';
import { HousingContext } from '../../utils/context';
import { Housing, ApiResponse } from '../../types';
import Description from "../../components/Description";
import Dropdown from "../../components/Dropdown";
import Gallery from "../../components/Gallery";

const HousingSheet = () => {
    const params: Readonly<Params<string>> = useParams();
    const lodgingsResponse: ApiResponse | null = useContext(HousingContext);
    const [matchingLodging, setMatchingLodging] = useState<Housing | null | undefined>(null);

    useEffect((): void => {
        if(lodgingsResponse !== null && lodgingsResponse.housings.length > 0) {
            const match : Housing | undefined = lodgingsResponse.housings.find((hsg) => hsg.id === params.id);
            if (match) {
                setMatchingLodging(match);
            } else {
                setMatchingLodging(undefined);
            }
        }
    }, [lodgingsResponse, params]);
    
    return(
        <>
            {matchingLodging === undefined ?
                (
                    <Navigate to="/*" replace={true} />
                )
                :
                (
                    <>
                        {matchingLodging !== null &&
                            <>
                                <Gallery lodging={matchingLodging}/>
                                <Description lodging={matchingLodging}/>
                                <div className="housing-container-dropdowns">
                                    <Dropdown content={matchingLodging.description}/>
                                    <Dropdown content={matchingLodging.equipments}/>
                                </div>
                            </>
                        }   
                    </>
                )
            }
        </>
    
    );
};

export default HousingSheet;