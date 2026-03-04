import {NavLink} from "react-router-dom";

const Navbar = ()=>{
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">JOHN DOE</a>
                    <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarToggleExternalContent"
                    aria-controls="navbarToggleExternalContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <div
                className="collapse"
                id="navbarToggleExternalContent"
                data-bs-theme="dark"
            >
                <div className="bg-dark p-4 text-light">
                    <ul className="navbar-nav justify-content-end">
                        <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "navlink active" : "navlink"} to="/">Home</NavLink></li>
                        <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "navlink active" : "navlink"} to="/services">Services</NavLink></li>
                        <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "navlink active" : "navlink"} to="/portfolio">Portfolio</NavLink></li>
                        <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "navlink active" : "navlink"} to="/contact">Contact</NavLink></li>
                        <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "navlink active" : "navlink"} to="/mention-legal">Mention légale</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;