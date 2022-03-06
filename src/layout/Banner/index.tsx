interface Props {
    title?: string,
    image: string
};

const Banner = ( props: Props): JSX.Element => {
    return (
        <div className="banner-container">
            {props.title &&
                <h2 className="banner-title">{props.title}</h2>
            }
            <img className="banner-image" src={props.image} alt="Paysage de la mer et de falaises"/>
        </div>
    );
};

export default Banner;