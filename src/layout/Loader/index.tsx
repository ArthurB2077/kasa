import React from 'react';

interface Props {
    children : React.ReactNode,
    shouldLoad: boolean
};

const Loader = ({ children, shouldLoad }: Props): JSX.Element => {

    return (
        <>
            {shouldLoad ? 
                (<div className="loader-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                )
                :
                (
                    <>
                        { children }
                    </>
                )
            }
        </>
        
    );
};

export default Loader;