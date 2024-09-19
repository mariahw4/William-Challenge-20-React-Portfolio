import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-social">
                    <a href="https://github.com/itswillynilly" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/willcylee/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="mx-auto">
                        <h5>
                            William Copyright 2024
                        </h5>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;