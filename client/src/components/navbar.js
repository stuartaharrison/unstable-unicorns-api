import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <NavLink className="navbar-item" to="/">
                    <img src="/images/brand-logo-1.png" />
                </NavLink>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <NavLink className="navbar-item" to="/">
                        Home
                    </NavLink>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">Database</a>
                        <div class="navbar-dropdown">
                            <NavLink className="navbar-item" to="/database">
                                Cards
                            </NavLink>
                            <NavLink className="navbar-item" to="/packs">
                                Packs &amp; Sets
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;