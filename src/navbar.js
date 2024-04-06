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

        <div className="more-button"> {/* Changed class name */}
          <a href="/bookapt" className="book-appointment-btn">
            Book an appointment
          </a>
        </div>
        <div className="more-button"> {/* Changed class name */}
          <a href="/checkinsurance" className="checkinsurance-btn">
            Accepted insurance
          </a>
        </div>
        <div className="more-button" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}> {/* Changed class name */}
         
          
          <div class="dropdown">
              <button class="dropbtn"> 
            Treatments <FaChevronDown style={{ verticalAlign: "middle", marginBottom: "1px", fontWeight: 250, fontSize: "0.6em" }} />
          
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="/treatment1" className="Treatments">TMS Brain Mapping</a>
                <a href="/treatment2" className="Treatments">Adult Psychiatry</a>
                <a href="/treatment3" className="Treatments">Group Therapy</a>
              </div>
          </div>
          
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
