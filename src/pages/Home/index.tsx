import { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Location } from 'react-router-dom';
import { HousingContext } from '../../utils/context';
import { ApiResponse } from '../../types';
import Banner from '../../layout/Banner';
import BannerImage from './../../assets/home-banner.png';
import CardContainer from '../../components/CardContainer';
import Header from './../../layout/Header';
import Footer from './../../layout/Footer';
import Loader from './../../layout/Loader';
import text from './../../assets/text';

const Home = (): JSX.Element => {
    const lodgingResponse: ApiResponse | null = useContext(HousingContext);
    let { state }: Location = useLocation();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect((): void => {
        if(lodgingResponse) {
            const { loading } = lodgingResponse;
            setIsLoading(loading);
        }
    }, [lodgingResponse])
  
    return(
        <Loader shouldLoad={isLoading}>
            <Header/>
            <Banner title={text.bannerHomeTitle1} image={BannerImage}/>
            <CardContainer lodging={lodgingResponse} lastView={state}/>
            <Footer/>
        </Loader>
    );
};

export default Home;