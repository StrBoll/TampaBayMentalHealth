import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./main.css";
import {Link} from "react-router-dom";
import image4 from './images/image4.jpg';

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
        
        <div className="profbutton">
        <a href="/bookapt" class="book-appointment-btn">Book an appointment</a>
        </div>
        <div className="profbutton">
        <a href="/checkinsurance" class="checkinsurance-btn">Accepted insurance</a>
        </div>
        <div className="profbutton">
        <a href="/treatments" class="Treatments">Treatments</a>
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