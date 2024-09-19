import SelfPortrait from '/images/IMG_9605.jpeg'

const AboutMe = () => {
    return (
        <div className="about-me">
            <h2 className="bio-title">
                Hi, I'm William. Welcome to my website!
            </h2>
            <div className="image-container">
                <img src={SelfPortrait} alt="self-portrait of me" className="profile-photo" />
            </div>
            <p className="bio">I'm a <span style={{fontWeight: 'bold', color: 'red'}}>Full Stack Developer</span>. I craft unforgettable experiences, blending intuitive front-end design and intricate backend logic.</p>
        </div>
    );
}

export default AboutMe;