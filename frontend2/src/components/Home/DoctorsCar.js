import '../../../node_modules/bootstrap/dist/css/bootstrap.css'

function DoctorsCar() {

    return (<div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <div class="carousel-inner">
      <center>
      <div class="carousel-item active">
        <img src="http://localhost:3000/assets/images/doc1.jpg" class="d-block w-50" alt="doc1.jpg"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Dr. Doctor 1</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="http://localhost:3000/assets/images/doc2.jpg" class="d-block w-50" alt="doc2.jpg"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Dr. Doctor 2</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="http://localhost:3000/assets/images/doc3.jpg" class="d-block w-50" alt="doc3.jpg"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Dr. Doctor 3</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
      </center>
    </div>
    <center>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    </center>
  </div>

    );
}

export default DoctorsCar;