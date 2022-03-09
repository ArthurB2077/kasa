import { useContext } from 'react';
import { useLocation } from 'react-router';
import { Location } from 'react-router-dom';
import { HousingContext } from '../../utils/context';
import { ApiResponse } from '../../types';
import Banner from '../../layout/Banner';
import BannerImage from './../../assets/home-banner.png';
import CardContainer from '../../components/CardContainer';
import text from './../../assets/text';


const Home = (): JSX.Element => {
    const lodgingResponse: ApiResponse | null = useContext(HousingContext);
    const { state }: Location = useLocation();
  
    return(
        <>
            <Banner title={text.bannerHomeTitle1} image={BannerImage}/>
            <CardContainer lodging={lodgingResponse} lastView={state}/>
        </>
    );
};

export default Home;