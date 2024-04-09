import React, { useRef, useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import "./main.css";
import { Link } from "react-router-dom"; // Import Link component
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
        <Link to="/" className="logo"> {/* Use Link instead of <a> */}
          <img src={logoImage} alt="Logo" style={{ width: "150px", height: "auto" }} />
        </Link>

        <div className="dropbuttons"> {/* Changed class name */}
          <Link to="/bookapt" className="book-appointment-btn"> {/* Use Link instead of <a> */}
            Book an appointment
          </Link>
        </div>
        <div className="dropbuttons"> {/* Changed class name */}
          <Link to="/checkinsurance" className="check-inusrance"> {/* Use Link instead of <a> */}
            Accepted insurance
          </Link>
        </div>
        <div className="dropbuttons" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}> {/* Changed class name */}
         
          <div class="dropdown">
              <button class="dropbtn"> 
            Treatments <FaChevronDown style={{ verticalAlign: "middle", marginBottom: "1px", fontWeight: 250, fontSize: "0.6em" }} />
          
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <Link to="/treatment1" className="Treatments">TMS Brain Mapping</Link> {/* Use Link instead of <a> */}
                <Link to="/treatment2" className="Treatments">Adult Psychiatry</Link> {/* Use Link instead of <a> */}
                <Link to="/treatment3" className="Treatments">Group Therapy</Link> {/* Use Link instead of <a> */}
              </div>
          </div>
          
        </div>
        <div className="dropbuttons" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
        <div class="dropdown">
              <button class="dropbtn"> 
            More <FaChevronDown style={{ verticalAlign: "middle", marginBottom: "1px", fontWeight: 250, fontSize: "0.6em" }} />
          
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
              
              <Link to="/meet" className="Biography">Meet our team</Link> {/* Use Link instead of <a> */}
                <Link to="/treatment2" className="Treatments">More2</Link> {/* Use Link instead of <a> */}
                <Link to="/treatment3" className="Treatments">More3</Link> {/* Use Link instead of <a> */}
              </div>
          </div>
          </div>
        <a href="tel:8132692920" className="phone-number-btn">Call Us: (813) 269-2920</a>
        <a href={`mailto:example@gmail.com`} className='phone-number-btn'>
          email us
        </a>
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
