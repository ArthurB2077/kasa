import { Link } from "react-router-dom";

interface Props {
    id: string,
    title: string,
    image: string,
}

const Card = (props: Props): JSX.Element => {
    return(
        <Link to={`/housing/${props.id}`}>
            <article className="card">
                <h3 className="card-title">{props.title}</h3>
                <div className="card-layer"/>
                <img className="card-image" src={props.image} alt={props.title}/>
            </article>
        </Link>
    );
};

export default Card;