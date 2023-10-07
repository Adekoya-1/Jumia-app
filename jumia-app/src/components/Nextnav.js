import React from 'react'

const Nextnav = () => {
    return (
    <>
    <div className="grey">
        <div className="sam">
        <img className='img img-fluid' src={require("../images/Screenshot 2023-10-06 170429.png")} alt="" />
        </div>
    </div>


        <div className="pop">
            <div className="sam d-flex align-items-center">
            <div className="imgg">
            <img className='img img-fluid' src={require("../images/Jumia-Logo-removebg-preview.png")} alt="" />
            </div>
    <div className="inp">
    <form className="d-flex" role="search">
        <div className="say d-flex w-100">
        <i class="fa fa-search mt-2"></i>
        <input className="w-100 me-2" type="search" placeholder="Search products, brands and categories" aria-label="Search"/>
        </div>
        <button className="sea mx-2" type="submit"><b>Search</b></button>
    </form>
    </div>
    <div className="drp d-flex justify-content-between">
    <div className="dropdown">
        <p className="drp1 mt-3 px-2 dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
        <i className='bi bi-person'></i> <b>Account</b>
        </p>
    <ul className="dropdown-menu">
    <li><button className="dropdown-item" type="button">My Account</button></li>
    <li><button className="dropdown-item" type="button"><i className="fa fa-box"></i> Orders</button></li>
    <li><button className="dropdown-item" type="button">Saved Items</button></li>
    </ul>
</div>

<div className="dropdown">
        <p className="drp1 mt-3 px-2 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="bi bi-question-circle"></i> <b>Help</b>
        </p>
    <ul className="dropdown-menu">
    <li><button className="dropdown-item" type="button">Help Center</button></li>
    <li><button className="dropdown-item" type="button">Place an order</button></li>
    <li><button className="dropdown-item" type="button">Payment options</button></li>
    <li><button className="dropdown-item" type="button">Track an order</button></li>
    <li><button className="dropdown-item" type="button">Cancel an order</button></li>
    <li><button className="dropdown-item" type="button">Returns & Refunds</button></li>
    </ul>
</div>

<div className="dropdown">
        <p className="drp1 mt-3 px-2">
        <i class="bi bi-cart"></i> <b>Cart</b>
        </p>
    
</div>
    </div>
    </div>
            </div>
        
    </>
    
    )
}

export default Nextnav