import { Housing } from '../../types';

interface Props {
    lodging: Housing
};

const Description = (props: Props): JSX.Element => {

    return(
        <div className='description-container'>
            <div className='description-content-left'>
                <div className='description-header'>
                    <h2 className='description-title'>{props.lodging.title}</h2>
                    <p className='description-location'>{props.lodging.location}</p>
                </div>
                <div className='description-tags'>
                    {Array.isArray(props.lodging.tags) && props.lodging.tags.length > 0 &&
                        props.lodging.tags.map((tg, index) => <span className='description-tag' key={`${tg}-${index}`}>{tg}</span>)
                    }
                </div>
            </div>
            <div className='description-content-right'>
                <div className='description-profil'>
                    <h4 className='description-profil-name'>{props.lodging.host.name}</h4>
                    <div className='description-profil-container-image'>
                        <img className='description-profil-image' src={props.lodging.host.picture} alt="Propriétaire"/>
                    </div>
                </div>
                <div className='description-rating'>
                    {
                        [1, 2, 3, 4, 5].map((str) => {
                            return(
                                <svg key={`star-${str}`} className={`description-star-${str <= parseInt(props.lodging.rating) ? 'full' : 'empty'}`} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3"/>
                                </svg>
                            );
                        })
                    }
                </div>
            </div>
        </div>

    );
};

export default Description;