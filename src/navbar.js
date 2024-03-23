import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./main.css";

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
        </div>
        <a href="/bookapt" class="book-appointment-btn">Book an appointment</a>
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