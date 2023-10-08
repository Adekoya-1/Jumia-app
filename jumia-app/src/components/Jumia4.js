import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Jumia4 = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get("http://localhost:2001/products")
        .then((res)=>{
            // console.log(res.data);
            setdata(res.data.slice (24,30))
            // console.log(data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    
    return (
        <>
        {data &&
            <div className="purr">
            <div className="top">
            <h2 className='px-2 text-center' style={{background:"#fee2cc"}}>Home Makeover Deals</h2>
            <div className="man p-2 d-flex justify-content-between">
                    {
                        data.map((el,id)=>(
                            <div className='showw' key={el}>
                            <img className='bor' src={(el.thumbnail)} alt="" />
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

export default Jumia4