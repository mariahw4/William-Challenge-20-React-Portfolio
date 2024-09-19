import './Header.css';
import NavTabs from '../Navigation/Navigation.jsx';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                    {/* <img src={logo} alt="William logo" className="logo" /> */}
                <nav>
                    <NavTabs />
                </nav>
            </div>
        </header>
    );
}

export default Header;