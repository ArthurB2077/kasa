import { useContext, useState, useEffect } from 'react';
import { HousingContext } from '../../utils/context';
import { ApiResponse } from '../../types';
import Header from './../../layout/Header';
import Footer from './../../layout/Footer';
import Loader from './../../layout/Loader';
import Banner from "../../layout/Banner";
import BannerImage from './../../assets/about-banner.png';
import Dropdown from "../../components/Dropdown";
import text from "../../assets/text";

const About = (): JSX.Element => {
    const lodgingResponse: ApiResponse | null = useContext(HousingContext);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(():void => {
        if(lodgingResponse) {
            const { loading } = lodgingResponse;
            setIsLoading(loading);
        } 
    }, [lodgingResponse]);

    return (
        <Loader shouldLoad={isLoading}>
            <Header/>
            <Banner image={BannerImage}/>
            <div className='about-dropdown-container'>
                {text.aboutTitles.map((ttl, index) => <Dropdown title={ttl} content={text.aboutContent[index]} size='xl'/>)}
            </div>
            <Footer/>
        </Loader>
    );
};

export default About;