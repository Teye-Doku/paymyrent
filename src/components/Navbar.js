import Link from "next/link";
import Image from "next/image";

import NavLinks from "../UI/NavLinks";
import MobileMenu from "../UI/MobileMenu";

const Navbar = ({ isHomePage }) => {
    return (
        <nav
            className={`navbar navbar-expand-lg compensate-for-scrollbar ${
                isHomePage ? "navbar-dark" : "navbar-dark bg-dark shadow-sm"
            }`}
        >
            <div className="container">
                <div className="d-lg-none">
                    <MobileMenu />
                </div>
                <Link href="/" scroll={false}>
                    <a
                        className="navbar-brand h-100 d-flex align-items-center"
                        href="#"
                    >
                        <img
                            src="/images/crik_studios_navbar_logo.png"
                            alt="Crik Studios Navbar Logo"
                            className="d-inline-block align-text-top img-fluid"
                            width="70"
                        />
                    </a>
                </Link>

                <div
                    className="justify-content-end collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <NavLinks />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
