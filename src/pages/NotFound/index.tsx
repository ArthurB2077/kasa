import { Link } from "react-router-dom";
import text from "../../assets/text";

const NotFound = () => {

    return(
        <main className='not-found-container'>
            <h1 className='not-found-title'>{text.notFoundTitle}</h1>
            <h2 className='not-found-sub-title'>{text.notFoundContent}</h2>
            <Link className='not-found-back-link' to='/'>{text.notFoundBack}</Link>
        </main>
    );
};

export default NotFound;