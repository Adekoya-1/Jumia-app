import React from 'react'

const Art = () => {
    return (
        <>
        <div className="purr">
                <div className="top">
                <h2 className='px-2 text-center' style={{background:"#aadef1"}}>Deals you can't miss</h2>
                <div className="man p-2 d-flex justify-content-between">
                        <div className='showw '>
                            <img className='bor' src={require("../images/Artboard_1.jpg")} alt="" />
                        </div>
                        <div className="showw">
                            <img className='bor' src={require("../images/Artboard_2.jpg")} alt="" />
                        </div>
                        <div className="showw">
                            <img className='bor' src={require("../images/Artboard_3.jpg")} alt="" />
                        </div>
                        <div className="showw">
                            <img className='bor' src={require("../images/Artboard_4.jpg")} alt="" />
                        </div>
                        <div className="showw">
                            <img className='bor' src={require("../images/Artboard_5.jpg")} alt="" />
                        </div>
                        <div className="showw">
                            <img className='bor' src={require("../images/Artboard_6.png")} alt="" />
                        </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Art