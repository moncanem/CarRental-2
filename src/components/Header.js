export function Header(props) {
    return (
        <header className={props.class_component}>
            <div className="container-fluid">
                <nav>
                    <a className="navlogo" href="#">
                        <img src="/img/camper-van.png" alt="Logo" />
                    </a>
                    <ul className="nav justify-content-center flex">
                        <li className="nav-item">
                            <a className="nav-link active" href="/ourvans.html">Our vans</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/rentalinfo.html">Rental info</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/photo-gallery.html">Photo gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/aboutus.html">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/travel-tips.html">Travel tips</a>
                        </li>
                    </ul>
                    <details>
                        <summary className="fa-solid fa-bars"></summary>
                        <ul className="nav-summary justify-content-center flex">
                            <li className="nav-item">
                                <a className="nav-link active" href="/ourvans.html">Our vans</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/rentalinfo.html">Rental info</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/photo-gallery.html">Photo gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/aboutus.html">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/travel-tips.html">Travel tips</a>
                            </li>
                        </ul>
                    </details>
                </nav>
            </div>
        </header>
    );
}