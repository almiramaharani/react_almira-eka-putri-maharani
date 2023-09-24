import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

export default function Navbar() {
    return (
        <>
            <div className="navbar navbar-expand-lg bg-body-tertiary shadow" id="navbar">
                <div className="container-fluid">
                    <a id="logo-header" className="navbar-brand fw-semibold" href="#">
                        Mira's Web
                    </a>
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
                                <a href="#about">
                                    <button type="button" className="btn btn-link nav-btn">About</button>
                                </a>
                            </li>
                            <li className="nav-item me-5">
                                <a href="#contact">
                                    <button type="button" className="btn btn-link nav-btn">Contacts</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}