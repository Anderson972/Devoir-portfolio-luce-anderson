import { Link } from "react-router-dom";


const Footer =() => {
    return(
        <div className="footer container-fluid bg-dark text-light p-5">
            <div className="contact container">
                <h3>John doe</h3>
                <address>
                    <a className="link-light" target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/2MuyCiCbeFUKFypB9">
                        40 rue Laure Diebold <br/>
                        69009 Lyon, France
                    </a><br />
                    <a href="tel:1020304050" className="link-light">10 20 30 40 50</a><br />
                    <a href="mailto:john.doe@gmail.com" className="link-light">john.doe@gmail.com</a>
                </address>
                <a href="https://github.com/github-john-doe" target="_blank"  className="icon-link link-light social" style={{fontSize: 2 + "rem"}} rel="noreferrer nofollow"><i className="bi bi-github"></i></a>
                <a href="https://x.com/" target="_blank"  className="icon-link link-light social" style={{fontSize: 2 + "rem"}} rel="noreferrer nofollow"><i className="bi bi-twitter"></i></a>
                <a href="https://www.linkedin.com" target="_blank"  className="icon-link link-light social" style={{fontSize: 2 + "rem"}} rel="noreferrer nofollow"><i className="bi bi-linkedin"></i></a>
            </div>
            <div className="useful-links container">
                <h3>Liens utiles</h3>
                <ul className="navbar-nav justify-content-end">
                        <li className="nav-item"><Link className="link-light" to="/">Acceuil</Link></li>
                        <li className="nav-item"><Link className="link-light" to="/services">Services</Link></li>
                        <li className="nav-item"><Link className="link-light" to="/portfolio">Portfolio</Link></li>
                        <li className="nav-item"><Link className="link-light" to="/contact">Contact</Link></li>
                        <li className="nav-item"><Link className="link-light" to="/mention-legal">Mention légale</Link></li>
                    </ul>
            </div>
            <div className="realisation container">
                <h3>Mes dernières réalisations</h3>
                <ul className="navbar-nav justify-content-end">
                    <li className="nav-item"><Link className="link-light" to="/portfolio">Fresh Food</Link></li>
                    <li className="nav-item"><Link className="link-light" to="/portfolio">Restaurant Akira</Link></li>
                    <li className="nav-item"><Link className="link-light" to="/portfolio">Espace bien-être</Link></li>
                    <li className="nav-item"><Link className="link-light" to="/portfolio">SEO</Link></li>
                    <li className="nav-item"><Link className="link-light" to="/portfolio">Création d'une API</Link></li>
                    <li className="nav-item"><Link className="link-light" to="/portfolio">Maquette d'un site</Link></li>
                </ul>    
            </div>
        </div>
    )
}

export default Footer;