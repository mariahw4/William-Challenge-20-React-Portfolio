import portfolio from '../assets/images/professional-portfolio.png';
import payrollTracker from '../assets/images/payroll-tracker.png';
import astroWhisper from '../assets/images/astro-whisper.png';
import weatherDashboard from '../assets/images/weather-dashboard.png';
import noteTaker from '../assets/images/note-taker.png';
import taskBoard from '../assets/images/task-board.png';

const Portfolio = () => {
    const projects = [
        { 
            title: "Challenge 01 | HTML/CSS Portfolio", 
            imageUrl: portfolio, 
            liveLink: "https://itswillynilly.github.io/Challenge-02-Professional-Portfolio/", 
            repoLink: "https://github.com/ItsWillyNilly/Challenge-02-Professional-Portfolio" 
        },
        { 
            title: "Challenge 02 | Employee Payroll Tracker", 
            imageUrl: payrollTracker, 
            liveLink: "https://itswillynilly.github.io/Challenge-03-Employee-Payroll-Tracker/", 
            repoLink: "https://github.com/ItsWillyNilly/Challenge-03-Employee-Payroll-Tracker" 
        },
        { 
            title: "Project 01 | Astro Whisper", 
            imageUrl: astroWhisper, 
            liveLink: "https://itswillynilly.github.io/Project-01-AstroWhisper/", 
            repoLink: "https://github.com/ItsWillyNilly/Project-01-AstroWhisper" 
        },
        { 
            title: "Challenge 03 | Weather Dashboard", 
            imageUrl: weatherDashboard, 
            liveLink: "https://itswillynilly.github.io/Challenge-06-Weather-Dashboard/", 
            repoLink: "https://github.com/ItsWillyNilly/Challenge-06-Weather-Dashboard" 
        },
        { 
            title: "Challenge 04 | Note Taker", 
            imageUrl: noteTaker, 
            liveLink: "https://challenge-11-note-taker-nq4y.onrender.com/notes", 
            repoLink: "https://github.com/ItsWillyNilly/Challenge-11-Note-Taker?tab=readme-ov-file" 
        },
        { 
            title: "Challenge 06 | Task Board", 
            imageUrl: taskBoard, 
            liveLink: "https://itswillynilly.github.io/Challenge-05-Task-Board", 
            repoLink: "https://github.com/ItsWillyNilly/Challenge-05-Task-Board" 
        }
    ];

    return (
        <div className="container">
            <div className="row">
                {projects.map((project, index) => (
                    <div className="col-12 col-md-6 mb-4" key={index}>
                        <div className="project card h-100 large-card">
                            <img src={project.imageUrl} className="card-img-top" alt={project.title} />
                            <div className="card-body text-center">
                                <h3 className="card-title">{project.title}</h3>
                                <a href={project.liveLink} className="live-demo btn m-2" target="_blank" rel="noopener noreferrer">Project Demo</a>
                                <a href={project.repoLink} className="github-repo btn m-2" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;