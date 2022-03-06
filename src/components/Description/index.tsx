import { Navigate, useParams } from 'react-router-dom';
import { Params } from 'react-router-dom';
import { HousingContext } from '../../utils/context';
import { Housing, ApiResponse } from '../../types';
import { useContext, useEffect, useState } from 'react';

const Description = (): JSX.Element => {
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
                (matchingLodging !== null &&
                    <div className='description-container'>
                        <div className='description-content-left'>
                            <div className='description-header'>
                                <h2 className='description-title'>{matchingLodging.title}</h2>
                                <p className='description-location'>{matchingLodging.location}</p>
                            </div>
                            <div className='description-tags'>
                                {Array.isArray(matchingLodging.tags) && matchingLodging.tags.length !== 0 &&
                                    matchingLodging.tags.map((tg, index) => <span className='description-tag' key={`${tg}-${index}`}>{tg}</span>)
                                }
                            </div>
                        </div>
                        <div className='description-content-right'>
                            <div className='description-profil'>
                                <h4 className='description-profil-name'>{matchingLodging.host.name}</h4>
                                <div className='description-profil-container-image'>
                                    <img className='description-profil-image' src={matchingLodging.host.picture} alt="Propriétaire"/>
                                </div>
                            </div>
                            <div className='description-rating'>
                                {matchingLodging !== undefined && 
                                    [1, 2, 3, 4, 5].map((str) => {
                                        return(
                                            <svg key={`star-${str}`} className={`description-star-${str <= parseInt(matchingLodging.rating) ? 'full' : 'empty'}`} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3"/>
                                            </svg>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )

            }
        </>
    );
};

export default Description;