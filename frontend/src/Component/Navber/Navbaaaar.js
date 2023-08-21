import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../mystyle.css'
import './Naveber.css'

function Navbaaaar() {
    return (<nav class="navbar navbar-default" style={ {backgroundColor: "cyan"}}>
    <div class="container-fluid">
      {/* <!-- Brand and toggle get grouped for better mobile display --> */}
      <div class="navbar-header">
        {/* <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" 
                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar">123</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button> */}
        
        <a class="navbar-brand" href="Home">Mars Hospital</a>

      </div>
  
      {/* <!-- Collect the nav links, forms, and other content for toggling --> */} 
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" style={{color: "green"}}>
        <ul class="nav navbar-nav navbarfont">
        <img src="http://localhost:3000/images/img.png" class="img-responsive imagenav" alt="Responsive image"/>
        </ul>
        <form class="navbar-form navbar-left">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search"/>
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="Home">Home <span class="sr-only">(current)</span></a></li>
          <li><a href="Home">About</a></li>
          <li><a href="Home">Gallery</a></li>
          <li><a href="Home">Contact Us</a></li>
          <li><a href="Home">Register</a></li>
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" role="button" 
                aria-haspopup="true" aria-expanded="false">
                    Login 
                <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="Home">Action</a></li>
              <li><a href="Home">Another action</a></li>
              <li><a href="Home">Something else here</a></li>
              <li role="separator" class="divider"></li>
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

export default Navbaaaar;