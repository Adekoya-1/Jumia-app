import React from 'react'

const Show = () => {
    return (
        <>
        <div className="main pt-2 px-2">
            <div className="d-flex justify-content-between mb-4">
            <div className="show pb-1">
            <img className='img img-fluid bor' src={require("../images/1.gif")} alt="" />
                <p className='my-2 text-center'>Authenticity Guaranteed</p>
            </div>
            <div className="show pb-1">
            <img className='img img-fluid bor' src={require("../images/2.png")} alt="" />
                <p className='my-2 text-center'>Phones & Tablets</p>
            </div>
            <div className="show pb-1">
            <img className='img img-fluid bor' src={require("../images/3.png")} alt="" />
                <p className='my-2 text-center'>Groceries</p>
            </div>
            <div className="show pb-1">
            <img className='img img-fluid bor' src={require("../images/4.jpg")} alt="" />
                <p className='my-2 text-center'>Computing Deals</p>
            </div>
            <div className="show pb-1">
            <img className='img img-fluid bor' src={require("../images/5.png")} alt="" />
                <p className='my-2 text-center'>₦5,000 Store</p>
            </div>
            <div className="show pb-1">
            <img className='img img-fluid bor' src={require("../images/6.png")} alt="" />
                <p className='my-2 text-center'>Televisions</p>
            </div>
            </div>

            <div className="d-flex justify-content-between mb-4">
            <div className="show pb-1">
            <img className='img img-fluid bor' src={require("../images/7.png")} alt="" />
                <p className='my-2 text-center'>Refrigerators</p>
            </div>
            <div className="show pb-1">
            <img className='img img-fluid bor' src={require("../images/8.png")} alt="" />
                <p className='my-2 text-center'>Mobile Accessories</p>
            </div>
            <div className="show pb-1">
            <img className='img img-fluid bor' src={require("../images/9.gif")} />
                <p className='my-2 text-center'>Generators</p>
            </div>
            <div className="show pb-1">
            <img className='img img-fluid bor' src={require("../images/10.png")} alt="" />
                <p className='my-2 text-center'>Men's Sneakers</p>
            </div>
            <div className="show pb-1">
            <img className='img img-fluid bor' src={require("../images/11.png")} alt="" />
                <p className='my-2 text-center'>Watches</p>
            </div>
            <div className="show pb-1">
            <img className='img img-fluid bor' src={require("../images/12.gif")} alt="" />
                <p className='my-2 text-center'>Clearance Sales</p>
            </div>
            </div>
            </div>
        </>
    )
}

export default Show