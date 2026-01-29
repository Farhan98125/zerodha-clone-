import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
            <div class="container p-2">
                <Link class="navbar-brand" to="/">   
                    <img src='media/images/logo.svg' alt='logo' style={{ width: "25%" }}></img>
                </Link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    {/* these are the navbar compenents */}
                    <form class="d-flex" role="search">
                        <ul class="navbar-nav  mb-lg-0">

                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/sign_up">
                                Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/about">
                                    About</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active" to="/product">
                                    Product</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active" to="/pricing">
                                    pricing</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active" to="/support">
                                    Support</Link>
                            </li>
                            
                            {/* this is for bar */}
                            <li class="nav-item ">
                                <Link class="nav-link active " href="#">
                                   <i class="fa fa-bars" aria-hidden="true"></i> </Link>
                            </li>
                        </ul>
                    </form>

                </div>
            </div>
        </nav >
    );
}

export default Navbar;