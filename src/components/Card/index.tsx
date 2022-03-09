import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {
    id: string,
    title: string,
    image: string,
    isLastView?: unknown
}

const Card = (props: Props): JSX.Element => {
    const lastViewRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if(lastViewRef && lastViewRef.current) {
            lastViewRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        }
    }, []);

    return(
        <Link to={`/housing/${props.id}`} state={props.id}>
            {props.isLastView === props.id ? 
                (
                    <article ref={lastViewRef} className="card">
                        <h3 className="card-title">{props.title}</h3>
                        <div className="card-layer"/>
                        <img className="card-image" src={props.image} alt={props.title}/>
                    </article>
                )
                :
                (
                    <article className="card">
                        <h3 className="card-title">{props.title}</h3>
                        <div className="card-layer"/>
                        <img className="card-image" src={props.image} alt={props.title}/>
                    </article>
                )

            }
        </Link>
    );
};

export default Card;