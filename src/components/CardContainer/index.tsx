import { useContext } from 'react';
import { HousingContext } from '../../utils/context';
import { Housing } from '../../types';
import Card from '../Card';

const CardContainer = (): JSX.Element => {
    const lodgings: Housing[] | [] | undefined = useContext(HousingContext);

    return(
        <main className="card-container">
            {lodgings && lodgings.length !== 0 &&
                lodgings.map(ldg => <Card title={ldg.title} image={ldg.cover} key={ldg.id}/>)
            }
        </main>
    );
};

export default CardContainer;