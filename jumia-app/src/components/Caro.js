import React from 'react'

const Caro = () => {
  return (
    <>
    <div className="bg">
        <div className="sam pt-3 d-flex text-center justify-content-between">
            <div className='one bor'>
                <p className='d-flex'><i class="bi bi-apple"></i> Supermarket</p>
                <p className='d-flex'><i class="fa fa-stethoscope"></i>Health & Beauty</p>
                <p className='d-flex'><i class="bi bi-house"></i> Home & Office</p>
                <p className='d-flex'><i className='bi bi-plug'></i> Appliances</p>
                <p className='d-flex'><i className='bi bi-phone'></i> Phones & Tablets</p>
                <p className='d-flex'><i className='fa fa-tv'></i> Computing</p>
                <p className='d-flex'><i class="bi bi-display"></i> Electronics</p>
                <p className='d-flex'><i className='bi bi-emoji-sunglasses'></i> Fashion</p>
                <p className='d-flex'><i class="bi bi-person-arms-up"></i> Baby Products</p>
                <p className='d-flex'><i className='bi bi-controller'></i> Gaming</p>
                <p className='d-flex'><i class='bi bi-bicycle' ></i> Sporting Goods</p>
                <p className='d-flex'><i className='bi bi-chat-dots'></i> Other categories</p>
            </div>



            <div className='two'>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img className='img img-fluid bor' src={require("../images/one.jpg")} alt="" />
            </div>
            <div class="carousel-item active">
            <img className='img img-fluid bor' src={require("../images/two.jpg")} alt="" />
            </div>
            <div class="carousel-item active">
            <img className='img img-fluid bor' src={require("../images/three.jpg")} alt="" />
            </div>
            <div class="carousel-item active">
            <img className='img img-fluid bor' src={require("../images/four.jpg")} alt="" />
            </div><div class="carousel-item active">
            <img className='img img-fluid bor' src={require("../images/five.jpg")} alt="" />
            </div><div class="carousel-item active">
            <img className='img img-fluid bor' src={require("../images/sic.png")} alt="" />
            </div><div class="carousel-item active">
            <img className='img img-fluid bor' src={require("../images/seven.jpg")} alt="" />
            </div><div class="carousel-item active">
            <img className='img img-fluid bor' src={require("../images/eight.jpg")} alt="" />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
            </div>



            <div className='four'>
                <div className='three mb-3'>
                <img className='img img-fluid bor' src={require("../images/bsb.jpg")} alt="" />

                </div>
                <div className='three'>
                <img className='img img-fluid bor' src={require("../images/JForce.png")} alt="" />

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Caro