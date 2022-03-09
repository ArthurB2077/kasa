
import { ApiResponse } from '../../types';
import Card from '../Card';

interface Props {
    lodging: ApiResponse | null,
    lastView?: unknown,
}

const CardContainer = (props: Props): JSX.Element => {

    return(
        <main className="card-container">
            {props.lodging && props.lodging.housings.length !== 0 &&
                props.lodging.housings.map(hsg => <Card id={hsg.id} title={hsg.title} image={hsg.cover} key={hsg.id} isLastView={props.lastView}/>)
            }
        </main>
    );
};

export default CardContainer;