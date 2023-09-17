// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

export default function Header () {
    return (
        <>
             <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
                <div className="container-fluid">
                <a id="logo-header" className="navbar-brand" href="#">Simple Header</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item me-5">
                        <button type="button" className="nav-btn btn btn-link">Home</button>
                    </li>
                    <li className="nav-item me-5">
                        <button type="button" className="nav-btn btn btn-link">Features</button>
                    </li>
                    <li className="nav-item me-5">
                        <button type="button" className="nav-btn btn btn-link">Pricing</button>
                    </li>
                    <li className="nav-item me-5">
                        <button type="button" className="nav-btn btn btn-link">FAQs</button>
                    </li>
                    <li className="nav-item me-4">
                        <button type="button" className="nav-btn btn btn-link">About</button>
                    </li>                  
                    </ul>
                </div>
                </div>
            </nav>
        </>
    )
}