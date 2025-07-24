import React from 'react'

function Reviews() {
     const bg={
        backgroundColor: 'chocolate',
    }
  return (
  <>
  <div style={bg} id="testimonialCarousel" class="carousel slide container my-5" data-bs-ride="carousel">
  <h2 class="text-center mb-4">What Our Customers Say</h2>
  <div class="carousel-inner">
    <div class="carousel-item active text-center">
      <blockquote class="blockquote">
        <p>"This company is amazing! Fast delivery and great products."</p>
        <footer class="blockquote-footer">Maryam Fatima</footer>
      </blockquote>
    </div>
    <div class="carousel-item text-center">
      <blockquote class="blockquote">
        <p>"I'm very happy with my experience. Excellent service!"</p>
        <footer class="blockquote-footer">Ali Raza</footer>
      </blockquote>
    </div>
    <div class="carousel-item text-center">
      <blockquote class="blockquote">
        <p>"Five stars. Great value for money."</p>
        <footer class="blockquote-footer">Zainab Khan</footer>
      </blockquote>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>


  </>
  )
}

export default Reviews
