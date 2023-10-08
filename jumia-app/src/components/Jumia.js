import React, {useEffect,useState} from 'react'
import axios from 'axios'

const Jumia = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get("http://localhost:1234/products")
        .then((res)=>{
            // console.log(res.data);
            setdata(res.data.slice (0,6))
            // console.log(data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    
    return (
    <>
    {data&&
        <div className="top mb-3">
            <h2 className='px-2'>Top selling items</h2>
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
    }
    
    </>
    )
}

export default Jumia