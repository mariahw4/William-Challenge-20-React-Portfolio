import ProfilePic from '../assets/profile-pic.jpg';
import './About.css';

export default function About() {
    return (
        <div className="about">
            <img src={ProfilePic} alt="Self Portrait of Myself" className="profile-pic" />
            <h2 className="about-header">Hi, I'm William. Welcome to my website!</h2>
            <p className="about-content">Placeholder text</p>
        </div>
    );
}