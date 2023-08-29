import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import { BaseApi } from '../api/BaseApi';
import './header.css'
function Header2() {
    return (<nav className="navbar navbar-default" style={ {backgroundColor: "skyblue"}}>
    <div className="container-fluid">
      {/* <!-- Brand and toggle get grouped for better mobile display --> */}
      <div className="navbar-header">
        {/* <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" 
                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar">123</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button> */}
        
        <a className="navbar-brand" href="Home">Mars Hospital</a>

      </div>
  
      {/* <!-- Collect the nav links, forms, and other content for toggling --> */} 
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" style={{color: "green"}}>
        <ul className="nav navbar-nav navbarfont">
        <img src={BaseApi.base_url+'assets/images/img.png'} className="img-responsive imagenav" alt="Responsive image"/>
        </ul>
        <form className="navbar-form navbar-left">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search"/>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="Home">Home <span className="sr-only">(current)</span></a></li>
          <li><a href="Home">About</a></li>
          <li><a href="Home">Gallery</a></li>
          <li><a href="Home">Contact Us</a></li>
          <li><a href="Home">Register</a></li>
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" role="button" 
                aria-haspopup="true" aria-expanded="false">
                    Login 
                <span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a href="Home">Action</a></li>
              <li><a href="Home">Another action</a></li>
              <li><a href="Home">Something else here</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="Home">Separated link</a></li>
            </ul>
          </li>
        </ul>
        </div>
      {/* <!-- /.navbar-collapse --> */}
    </div>
    {/* <!-- /.container-fluid --> */}
  </nav>);
}

export default Header2;