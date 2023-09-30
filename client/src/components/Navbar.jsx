import {  useState } from "react";
import { Link,  } from "react-router-dom";

const Navbar = () => {
  const [searchIcon, setSearchIcon] = useState(false);

  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);


  const toggleSearch = (e) => {
    e.preventDefault();
    // console.log("click");
    setSearchIcon(!searchIcon);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand mx-4" to="/">
            AVR SHASTRI
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {userData ? (
                <li className="nav-item mx-2">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/profile"
                  >
                    {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item mx-2">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/register"
                    >
                      Register
                    </Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Login
                    </Link>
                  </li>
                </>
              )}

              <li className="nav-item mx-2">
                <form action="">
                  <div className="bg-light rounded rounded-pill shadow-sm">
                    <div className="input-group">
                      {searchIcon ? (
                        <input
                          type="search"
                          placeholder="Search here........"
                          aria-describedby="button-addon1"
                          className="form-control border-0 bg-light"
                        />
                      ) : null}

                      <div className="input-group-append">
                        <button
                          id="button-addon1"
                          type="submit"
                          className="btn btn-link text-primary"
                          onClick={toggleSearch}
                        >
                          <i className="text-dark fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
