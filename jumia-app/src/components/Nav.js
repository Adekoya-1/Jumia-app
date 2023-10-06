import React from 'react'
import Nextnav from './Nextnav'

const Nav = () => {
    return (
    <>
    <div className="pur">
        <div className="sam">
            <img className='img img-fluid' src={require("../images/Jumia-cover-you.gif")} alt="" />
        </div>
    </div>
    <Nextnav/>
    </>
    )
}

export default Nav