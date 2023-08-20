import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../src/mystyle.css'

function DoctorsCar() {
    return (<div class="container">  
              <div id="myCarousel" class="carousel slide" data-ride="carousel">
                {/* <!-- Indicators --> */}
                <ol class="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
            
                {/* <!-- Wrapper for slides --> */}
                <div class="carousel-inner">
                  <div class="item active">
                    <img src="http://localhost:3000/images/doc1.jpg" alt="Doc-1" style={{width: "100%"}}/>
                    <div class="carousel-caption">
                      <h3>Dr. Sneha Dubey</h3>
                      <p>MBBS</p>
                    </div>
                  </div>
            
                  <div class="item">
                    <img src="http://localhost:3000/images/doc2.jpg" alt="Doc-2" style={{width: "100%"}}/>
                    <div class="carousel-caption">
                      <h3>Dr. Smita Kharade</h3>
                      <p>MD</p>
                    </div>
                  </div>
                
                  <div class="item">
                    <img src="http://localhost:3000/images/doc3.jpg" alt="Doc-3" style={{width: "100%"}}/>
                    <div class="carousel-caption">
                      <h3>Dr. Woman1</h3>
                      <p>degree</p>
                    </div>
                  </div>
                </div>
  
                {/* <!-- Left and right controls --> */}
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                  <span class="glyphicon glyphicon-chevron-left"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                  <span class="glyphicon glyphicon-chevron-right"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>);
}

export default DoctorsCar;