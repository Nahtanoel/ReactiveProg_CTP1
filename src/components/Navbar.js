import { Link } from 'react-router-dom';
import esgiLogo from './img/logo.jpg';

function Navbar() {

    return (
        <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarESgi" aria-controls="navbarESgi" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarESgi">
                    <a className="navbar-brand" href="/"><img className='lelogo' src={esgiLogo} alt="logo de l'esgi"/></a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Acceuil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/APS">A Propos Soirée</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contacter Organisation</Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Invite">Liste Invité</Link>

                        </li>
                    </ul>
                </div>
            </nav>
        </>)


}

export default Navbar;