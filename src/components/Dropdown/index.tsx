import React, { useState } from 'react';

const Dropdown = () => {
    const [open, setOpen] = useState<boolean>(false);

    return(
        <div className='dropdown-sm dropdown'>
            <div className='dropdown-header'>
                <h2 className='dropdown-title'>Respect</h2>
                <span className='dropdown-arrow-container' onClick={() => setOpen(!open)}>
                    <svg className='dropdown-arrow' width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z" fill="white"/>
                    </svg>
                </span>
            </div>
            {open && 
                <div className='dropdown-content'>
                    La bienveillance fait partie des valeurs fondatrices de Kasa. 
                    Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme. 
                </div>
            }
        </div>
    );
};

export default Dropdown;