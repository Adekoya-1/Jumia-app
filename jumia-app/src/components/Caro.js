import React from 'react'
import Show from './Show'
import Jumia from './Jumia'
import Jumia1 from './Jumia1'
import Jumia2 from './Jumia2'
import Art from './Art'

const Caro = () => {
  return (
    <>
    <div className="bg">
        <div className="sam pt-3 d-flex text-center justify-content-between">
            <div className='one bor'>
                <p className='d-flex'><i className="bi bi-apple"></i> Supermarket</p>
                <p className='d-flex'><i className="fa fa-stethoscope"></i>Health & Beauty</p>
                <p className='d-flex'><i className="bi bi-house"></i> Home & Office</p>
                <p className='d-flex'><i className='bi bi-plug'></i> Appliances</p>
                <p className='d-flex'><i className='bi bi-phone'></i> Phones & Tablets</p>
                <p className='d-flex'><i className='fa fa-tv'></i> Computing</p>
                <p className='d-flex'><i className="bi bi-display"></i> Electronics</p>
                <p className='d-flex'><i className='bi bi-emoji-sunglasses'></i> Fashion</p>
                <p className='d-flex'><i className="bi bi-person-arms-up"></i> Baby Products</p>
                <p className='d-flex'><i className='bi bi-controller'></i> Gaming</p>
                <p className='d-flex'><i className='bi bi-bicycle' ></i> Sporting Goods</p>
                <p className='d-flex'><i className='bi bi-chat-dots'></i> Other categories</p>
            </div>



            <div className='two'>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img className='img img-fluid bor' src={require("../images/one.jpg")} alt="" />
            </div>
            <div className="carousel-item active">
            <img className='img img-fluid bor' src={require("../images/two.jpg")} alt="" />
            </div>
            <div className="carousel-item active">
            <img className='img img-fluid bor' src={require("../images/three.jpg")} alt="" />
            </div>
            <div className="carousel-item active">
            <img className='img img-fluid bor' src={require("../images/four.jpg")} alt="" />
            </div><div className="carousel-item active">
            <img className='img img-fluid bor' src={require("../images/five.jpg")} alt="" />
            </div><div className="carousel-item active">
            <img className='img img-fluid bor' src={require("../images/sic.png")} alt="" />
            </div><div className="carousel-item active">
            <img className='img img-fluid bor' src={require("../images/seven.jpg")} alt="" />
            </div><div className="carousel-item active">
            <img className='img img-fluid bor' src={require("../images/eight.jpg")} alt="" />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
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
        
        <Show/>
        <Jumia/>
        <Jumia1/>
        <Jumia2/>
        <Art/>

    </div>

    </>
  )
}

export default Caro