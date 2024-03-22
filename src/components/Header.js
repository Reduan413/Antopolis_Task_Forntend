import { useState } from "react";
import { Button } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from 'next/link'
import Drops from "./Drops";
// import Logo from "../../../public/vercel.svg";

const Header = () => {

  const [sidebar, setSidebar] = useState(true);
  const [cart, setCart] = useState([]);

  const showSidebar = () => console.log("test");
  const [searchText, setSearchText] = useState("");
  const applySearchText = (e) => {
    setSearchText(e.target.value);
  };
  const toggleShow = () => console.log("test");
  const handelSearch = (e) => {
    e.preventDefault();
    // navigate(`/search/${searchText}`);
    setSearchText("");
  };


  return (
    <>
      <header className="header-area sticky">
        <div className="container">
          <div className="header-inner">
            <div className="row align-items-center g-0">
              <div className="col-12">
                <div className="header-inner-main">
                  <div className="header-logo-main">
                    <div
                      name="menu-outline"
                      className="sidebar-icon"
                      onClick={showSidebar}
                      id="hamburger-icon"
                    >
                      {sidebar ? (
                        <i className="fi-rr-menu-burger"></i>
                      ) : (
                        <i class="fi fi-rr-cross"></i>
                      )}
                    </div>
                    <div className="header-logo">
                      <Link href="/"> Logo
                        {/* <img src={Logo} alt="#" /> */}
                      </Link>
                    </div>
                  </div>
                  <div className="header-searchbar">
                    <form onSubmit={handelSearch}>
                      <input
                        type="text"
                        onChange={applySearchText}
                        value={searchText}
                        placeholder="Search Products"
                        required
                      />{" "}
                      <button className="search-btn" type="submit">
                        <i className="fi-rr-search"></i>
                      </button>
                    </form>
                  </div>
                  <div className="header-searchbar-top-right">
                    <div className="header-right-main">
                      <Button
                        variant="link"
                        onClick={toggleShow}
                        className="h-right-cart"
                      >
                        <span className="h-right-cart-item">{cart.length}</span>
                        <i className="fi-rr-shopping-bag"></i>
                      </Button>
                      <div className="h-right-main-accounts">
                        <NavDropdown title="My account" id="basic-nav-dropdown">
                          <NavDropdown.Item>
                            <i className="fi-rr-sign-out-alt"></i>Log Out
                          </NavDropdown.Item>
                        </NavDropdown>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Drops />
    </>
  );
};

export default Header;
