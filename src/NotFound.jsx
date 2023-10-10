import { Link } from "react-router-dom";
import { useCallback } from "react";
import logo from './assets/JB.png';

export default function NotFound() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <main className="NotFound">
            <div className="logo-container">
                <a href="/">
                <img src={logo} alt="Logo" className="logo-image" />
                </a>
            </div>
            <div className='belowLogo'></div>
            {/* <iframe src="https://giphy.com/embed/oW7cXqaVmt5EKQ48FQ" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/freakmeaning-freak-meaning-fre4k-oW7cXqaVmt5EKQ48FQ">via GIPHY</a></p> */}
            <div className="notFound-text">
                <h1 className="directions">404 - Crewmate Error</h1>
                <h1 className="directions">The link you followed was an impostor!</h1>
                <h1 className="directions">Try a different path.</h1>
                <p className="directions">Here are some helpful links:</p>
                <div className="linkContainer">
                    <Link to='/' className="directions">Home</Link>
                    <Link to='/resume' className="directions">Resume</Link>
                    <Link to='/contact' className="directions">Contact</Link>
                    <Link to='/portfolio' className="directions">portfolio</Link>
                </div>
            </div>
        </main>
    );
};
