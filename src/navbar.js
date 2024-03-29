import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./main.css";
import {Link} from "react-router-dom";
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
    <nav ref={navRef}>
    <a href="/" class="logo">Logo</a>
        <div>
            <h>email</h>
            <h>phone number</h>
        </div >
        <div className="profbutton">
        <a href="/bookapt" class="book-appointment-btn">Book an appointment</a>
        </div>
        <div className="profbutton">
        <a href="/checkinsurance" class="checkinsurance-btn">Accepted insurance</a>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
        </button>
    </nav>
    <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
    </button>
</header>
	);
}

export default Navbar;