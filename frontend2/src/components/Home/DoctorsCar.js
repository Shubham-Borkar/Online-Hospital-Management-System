import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import {BaseApi} from '../api/BaseApi';

function DoctorsCar() {

    return (<div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <div className="carousel-inner">
      <center>
      <div className="carousel-item active">
        <img src={BaseApi.base_url+'assets/images/doc1.jpg'} className="d-block w-50" alt="doc1.jpg"/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Dr. Doctor 1</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={BaseApi.base_url+'assets/images/doc2.jpg'} className="d-block w-50" alt="doc2.jpg"/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Dr. Doctor 2</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={BaseApi.base_url+'assets/images/doc3.jpg'} className="d-block w-50" alt="doc3.jpg"/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Dr. Doctor 3</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
      </center>
    </div>
    <center>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
    </center>
  </div>

    );
}

export default DoctorsCar;