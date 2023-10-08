import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Jumia1 = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get("http://localhost:2001/products")
        .then((res)=>{
            // console.log(res.data);
            setdata(res.data.slice (7,13))
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
            <h2 className='px-2 text-white bg-danger'><i className="bi bi-tag-fill text-warning"></i> Flash Sales</h2>
            <div className="d-flex man p-2 justify-content-between">
            {
                data.map((el,id)=>(
                    <div className='show' key={el}>
                        <img className='mb-2' src={(el.images[0])} alt="" />
                        <p>{el.description}</p>
                        <b>$ {el.price}</b>
                        <p>{el.discountPercentage}% Discount</p>
                        <p>{el.stock} items left</p>
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

export default Jumia1