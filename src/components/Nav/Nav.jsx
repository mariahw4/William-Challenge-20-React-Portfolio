import './Nav.css';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
    const location = useLocation().pathname;

    return (
        <ul className="nav nav-links">
            <li className="nav-content">
                <Link to="/" className={location === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
            </li>
            <li className="nav-content">
                <Link to="/about" className={location === '/about' ? 'nav-link active' : 'nav-link'}>About</Link>
            </li>
            <li className="nav-content">
                <Link to="/projects" className={location === '/projects' ? 'nav-link active' : 'nav-link'}>Projects</Link>
            </li>
            <li className="nav-content">
                <Link to="/contact" className={location === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
            </li>
        </ul>
    );
}