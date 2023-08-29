function Header2() {
    return (  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
  <div className="container-fluid">
    <a href="#" className="navbar-brand">
      <img src="images/logo.svg" height={28} alt="CoolBrand" />
    </a>
    <button
      type="button"
      className="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav">
        <a href="#" className="nav-item nav-link active">
          Home
        </a>
        <a href="#" className="nav-item nav-link">
          Profile
        </a>
        <a href="#" className="nav-item nav-link">
          Messages
        </a>
        <a href="#" className="nav-item nav-link disabled" tabIndex={-1}>
          Reports
        </a>
      </div>
      <div className="navbar-nav ms-auto">
        <a href="#" className="nav-item nav-link">
          Login
        </a>
      </div>
    </div>
  </div>
</nav>

    </>);
}

export default Header2;