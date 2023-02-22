import React from 'react'

const Crousel = () => {
  return (
    <div className='container-fluid' style={{marginTop:"70px"}}>
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="bar.jpg" className="d-block w-100" alt="..." style={{height:"430px", width:"250px"}}/>
    </div>
    <div className="carousel-item">
      <img src="background2.jpg" className="d-block w-100" alt="..." style={{height:"430px", width:"250px"}}/>
    </div>
    <div className="carousel-item">
      <img src="Tshirt-Banner.png" className="d-block w-100" alt="..." style={{height:"430px", width:"250px"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Crousel