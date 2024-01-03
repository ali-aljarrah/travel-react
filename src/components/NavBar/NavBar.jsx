import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function NavBar({ brandLogo, menuItems, btnText }) {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav className={navbar ? "navBar active" : "navBar"}>
      <div>
        <img
          loading="lazy"
          className="logo"
          src={brandLogo}
          alt="Travel Logo"
        />
      </div>
      <div className="d-block d-lg-none">
        <button className="open-btn" onClick={() => setOpen(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className={open ? 'items-menu show' : 'items-menu'}>
        <div className="mb-5 mt-4 d-block d-lg-none ms-4">
          <button className="close-btn" onClick={() => setOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M11.7679 10.0002L19.6342 2.13472C20.1225 1.64642 20.1225 0.854731 19.6342 0.366469C19.1459 -0.121831 18.3543 -0.121831 17.866 0.366469L10.0005 8.23279L2.13496 0.366469C1.64666 -0.121831 0.854975 -0.121831 0.366714 0.366469C-0.121548 0.85477 -0.121587 1.64646 0.366714 2.13472L8.23303 10.0002L0.366714 17.8658C-0.121587 18.3541 -0.121587 19.1457 0.366714 19.634C0.855014 20.1223 1.6467 20.1223 2.13496 19.634L10.0005 11.7676L17.866 19.634C18.3543 20.1223 19.1459 20.1223 19.6342 19.634C20.1225 19.1457 20.1225 18.354 19.6342 17.8658L11.7679 10.0002Z" fill="#DF6951"/>
            </svg>
          </button>
        </div>
        <ul className="nav-items">
          {menuItems.map((element, index) => {
            return (
              <li className="nav-item" key={index}>
                <NavLink
                  to={element.path}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  {element.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="d-block d-lg-none">
          <button className="btn-orange mx-auto">{btnText}</button>
        </div>
      </div>
      <div className="d-none d-lg-block">
        <button className="btn-orange">{btnText}</button>
      </div>
    </nav>
  );
}

export default NavBar;
