import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Navbar.css";

export default function Navbar() {
    return (
        <>
            <div className="navbar navbar-expand-lg bg-body-tertiary shadow" id="navbar">
                <div className="container-fluid">
                    <Link to="/">
                        <div id="logo-header" className="navbar-brand fw-semibold">Mira's Web</div>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item me-5">
                                <Link to='/about-me'>
                                    <button type="button" className="btn btn-link nav-btn">About</button>
                                </Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link to='/'>
                                    <button type="button" className="btn btn-link nav-btn">Contact</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}