import Banner from "../../layout/Banner";
import BannerImage from './../../assets/about-banner.png';
import Dropdown from "../../components/Dropdown";
import text from "../../assets/text";

const About = (): JSX.Element => {

    return (
        <>
            <Banner image={BannerImage}/>
            <div className='about-dropdown-container'>
                {text.aboutTitles.map((ttl, index) => <Dropdown title={ttl} content={text.aboutContent[index]} size='xl'/>)}
            </div>
        </>
    );
};

export default About;