import Logo from "../images/africonnect-logo.png";
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={Logo}
              alt=""
              width="250"
              className="d-inline-block align-text-top"
            />
          </a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div className="d-flex">
            <button className="btn btn-primary">Sign In</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
