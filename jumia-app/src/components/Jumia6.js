import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Jumia6 = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get("http://localhost:2001/products")
        .then((res)=>{
            // console.log(res.data);
            setdata(res.data.slice (31,36))
            // console.log(data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    
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
            
            {data &&
        <div className="purr">
            <div className="top">
            <h2 className='px-2' style={{background: "#fee2cc"}}>Top Home Makeover Deals</h2>
            <div className="d-flex man p-2 justify-content-between">
            {
                data.map((el,id)=>(
                    <div className='show' key={el}>
                        <img className='mb-2' src={(el.images[0])} alt="" />
                        <p>{el.description}</p>
                        <b>$ {el.price}</b>
                        <p>{el.discountPercentage}% Discount</p>
                        
                    </div>
                ))
            }
        </div>
        </div>
        </div>
    }
        </>
    )
}

export default Jumia6