import { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { HousingContext } from '../../utils/context';
import { ApiResponse } from '../../types';
import Header from './../../layout/Header';
import Footer from './../../layout/Footer';
import Loader from './../../layout/Loader';
import text from "../../assets/text";

const NotFound = () => {
    const lodgingResponse: ApiResponse | null = useContext(HousingContext);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(():void => {
        if(lodgingResponse) {
            const { loading } = lodgingResponse;
            setIsLoading(loading);
        } 
    }, [lodgingResponse]);

    return(
        <Loader shouldLoad={isLoading}>
            <Header/>
            <main className='not-found-container'>
                <h1 className='not-found-title'>{text.notFoundTitle}</h1>
                <h2 className='not-found-sub-title'>{text.notFoundContent}</h2>
                <Link className='not-found-back-link' to='/'>{text.notFoundBack}</Link>
            </main>
            <Footer/>
        </Loader>
    );
};

export default NotFound;