import { useState } from 'react';
import { Housing } from '../../types';

interface Props {
    lodging: Housing
}

const Gallery = (props: Props): JSX.Element => {
    const [index, setIndex] = useState<number>(0);

    return(
        <div className='gallery'>
            {props.lodging !== null && props.lodging.pictures && props.lodging.pictures.length > 0 &&
                <>
                    <span className='gallery-icon-container' onClick={() => setIndex((index + 1) % props.lodging.pictures.length)}>
                        <svg className='gallery-prev-icon' width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                        </svg>
                    </span>
                    <img className='gallery-image' src={`${props.lodging.pictures[index]}`} alt='Appartement' />
                    <span className='gallery-icon-container gallery-icon-container__next' onClick={() => setIndex((index - 1 + props.lodging.pictures.length) % props.lodging.pictures.length)}>
                        <svg className='gallery-next-icon' width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                        </svg>
                    </span>
                </>
            }
        </div>
    );
};

export default Gallery;