import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Jumia2 = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get("http://localhost:1234/products")
        .then((res)=>{
            // console.log(res.data);
            setdata(res.data.slice (14,20))
            // console.log(data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    
    return (
    <>
    {data&&
        <div className="purr">
            <div className="top">
            <h2 className='px-2' style={{background: "#fee2cc"}}>Limited Stock Deals</h2>
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

export default Jumia2