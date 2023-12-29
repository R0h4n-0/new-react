import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <header>
            <nav>
                <Link to = {'/'}> Home </Link>
                <Link to = {'/products'}>products</Link>
            </nav>
        </header>
    );
};