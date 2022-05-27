import React from "react";
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">

                <a class="navbar-brand" href="#">Star Wars guide</a>

                <div class="collapse navbar-collapse" id="navbarColor02">

                    <ul className="navbar-nav me-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home
                            </Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link" to="/characters">Characters
                            </Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link" to="/planets">Planets
                            </Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link" to="/movies">Movies
                            </Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link" to="/species">Species
                            </Link>
                        </li>



                    </ul>
                </div>
            </div>
        </nav>
    );
}