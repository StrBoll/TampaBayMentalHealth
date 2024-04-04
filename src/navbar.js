import { useRef, useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import "./main.css";
import { Link } from "react-router-dom";
import logoImage from "./images/cutLogoNavBar.png"; // Import your logo image

function Navbar() {
  const navRef = useRef();
  const dropdownRef = useRef();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header>
      <nav ref={navRef}>
        <a href="/" className="logo">
          <img src={logoImage} alt="Logo" style={{ width: "150px", height: "auto" }} />
        </a>

        <div className="profbutton">
          <a href="/bookapt" className="book-appointment-btn">
            Book an appointment
          </a>
        </div>
        <div className="profbutton">
          <a href="/checkinsurance" className="checkinsurance-btn">
            Accepted insurance
          </a>
        </div>
        <div className="profbutton" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <a href="/treatments" className="Treatments">
            Treatments <FaChevronDown style={{ verticalAlign: "middle", marginBottom: "1px", fontWeight: 250, fontSize: "0.6em" }} /> {/* Adjusted size */}
          </a>
          
          {dropdownVisible && (
            <div ref={dropdownRef} className="dropdown-content">
              <Link to="/treatment1">TMS Brain Mapping</Link>
              <Link to="/treatment2">Group Therapy</Link>
              <Link to="/treatment3">Adult Psychiatry</Link>
            </div>
          )}
          
        </div>
        <a href="tel:8132692920" className="phone-number-btn">Call Us: (813) 269-2920</a>
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