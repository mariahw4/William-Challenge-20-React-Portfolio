import './Header.css';
import Nav from '../Nav/Nav.jsx';

export default function Header() {
  return (
    <header className="header">
        <div className="container">
            <img src= {logo} alt="My Logo" className="logo" />
            <nav>
                <Nav />
            </nav>
        </div>
    </header>
  );
}