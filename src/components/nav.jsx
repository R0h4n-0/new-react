import { Link } from 'react-router-dom';
// import {Nav} from'./components/Nav';

export const Nav = () => {
    return (
        <header>
            <nav>
                <Link to = {'/'} className='mx-4'> Home </Link>
                <Link to = {'/products'} className='mx-4'>products</Link>
            </nav>
        </header>
    );
};