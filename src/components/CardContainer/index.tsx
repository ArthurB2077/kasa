import { useContext } from 'react';
import { HousingContext } from '../../utils/context';
import { ApiResponse } from '../../types';
import Card from '../Card';

const CardContainer = (): JSX.Element => {
    const lodgingsResponse: ApiResponse | null = useContext(HousingContext);

    return(
        <main className="card-container">
            {lodgingsResponse && lodgingsResponse.housings.length !== 0 &&
                lodgingsResponse.housings.map(ldg => <Card id={ldg.id} title={ldg.title} image={ldg.cover} key={ldg.id}/>)
            }
        </main>
    );
};

export default CardContainer;