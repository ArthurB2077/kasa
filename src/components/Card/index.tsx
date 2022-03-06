interface Props {
    title: string,
    image: string,
}

const Card = (props: Props): JSX.Element => {
    return(
        <article className="card">
            <h3 className="card-title">{props.title}</h3>
            <div className="card-layer"/>
            <img className="card-image" src={props.image} alt={props.title}/>
        </article>
    );
};

export default Card;