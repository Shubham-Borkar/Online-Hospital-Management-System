import React, { useState, useEffect } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { BaseApi } from '../api/BaseApi';

function DoctorsCar() {
  const doctorData = [
    {
      image: 'assets/images/doc1.jpg',
      name: 'Dr. Doctor 1',
      content: 'Some representative placeholder content for the first slide.',
    },
    {
      image: 'assets/images/doc2.jpg',
      name: 'Dr. Doctor 2',
      content: 'Some representative placeholder content for the second slide.',
    },
    {
      image: 'assets/images/doc3.jpg',
      name: 'Dr. Doctor 3',
      content: 'Some representative placeholder content for the third slide.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? doctorData.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === doctorData.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNextClick, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <div className="carousel slide">
      <center>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={BaseApi.base_url + doctorData[activeIndex].image}
              className="d-block w-50"
              alt={`doc${activeIndex + 1}.jpg`}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ color: 'black' }}>
                <b>{doctorData[activeIndex].name}</b>
              </h5>
              <p style={{ color: 'black' }}>{doctorData[activeIndex].content}</p>
            </div>
          </div>
        </div>
      </center>
      <button className="carousel-control-prev" type="button" onClick={handlePrevClick}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={handleNextClick}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <div className="custom-carousel-indicators">
        {doctorData.map((_, index) => (
          <div
            key={index}
            className={`custom-indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default DoctorsCar;
