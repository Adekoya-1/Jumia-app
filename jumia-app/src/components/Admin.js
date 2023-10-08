import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Nextnav from './Nextnav'

const Admin = () => {
    const [title, settitle] = useState("")
    const [rating, setrating] = useState("")
    const [stock, setstock] = useState("")
    const [brand, setbrand] = useState("")
    const [category, setcategory] = useState("")
    const [images, setimages] = useState("")
    const [description, setdescription] = useState("")
    const [price, setprice] = useState("")
    const [thumbnail, setthumbnail] = useState("")
    const [discountPercentage, setdiscountPercentage] = useState("")
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get("http://localhost:2001/products")
        .then((res)=>{
            // console.log(res.data);
            setdata(res.data.slice (20,26))
            // console.log(data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    const post =(e)=>{
        e.preventDefault()
        axios.post ("http://localhost:2001/products",{
            title,description,price,thumbnail,discountPercentage,rating,stock,brand,category,images
        }).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

        const deleteProduct = (productId) => {
            axios
            .delete(`http://localhost:2001/products/${productId}`)
            .then((res) => {
                // Handle successful deletion (e.g., update the product list)
                console.log(`Product with ID ${productId} deleted.`);
            })
            .catch((err) => {
                console.error(`Error deleting product: ${err}`);
            });
        };

            
    const editProduct = (productId) => {
        const newTitle = prompt('Enter a new title for the product:', data.find((p) => p.id === productId)?.title);
        const newDescription = prompt('Enter a new description for the product:', data.find((p) => p.id === productId)?.description);
        const newPrice = prompt('Enter a new price for the product:', data.find((p) => p.id === productId)?.price);
        const newDiscountPercentage = prompt('Enter a new discount percentage for the product:', data.find((p) => p.id === productId)?.discountPercentage);
        const newBrand = prompt('Enter a new brand for the product:', data.find((p) => p.id === productId)?.brand);
        const newStock = prompt('Enter a new stock for the product:', data.find((p) => p.id === productId)?.stock);
        const newCategory = prompt('Enter a new category for the product:', data.find((p) => p.id === productId)?.category);
        const newImages = prompt('Enter new images URL for the product (comma-separated):', data.find((p) => p.id === productId)?.images);
        const newThumbnail = prompt('Enter new images URL for the product (comma-separated):', data.find((p) => p.id === productId)?.thumbnail);

        if (newTitle !== null || newDescription !== null || newPrice !== null || newDiscountPercentage !== null ||
        newBrand !== null || newStock !== null || newCategory !== null || newImages !== null || newThumbnail !== null) {
        // User clicked "OK" in at least one prompt
        const updatedProduct = {
            title: newTitle || data.find((p) => p.id === productId)?.title,
            description: newDescription || data.find((p) => p.id === productId)?.description,
            price: newPrice || data.find((p) => p.id === productId)?.price,
            discountPercentage: newDiscountPercentage || data.find((p) => p.id === productId)?.discountPercentage,
            brand: newBrand || data.find((p) => p.id === productId)?.brand,
            stock: newStock || data.find((p) => p.id === productId)?.stock,
            category: newCategory || data.find((p) => p.id === productId)?.category,
            images: newImages || data.find((p) => p.id === productId)?.imagest,
            thumbnail: newThumbnail || data.find((p) => p.id === productId)?.thumbnail
        };

        axios
            .put(`http://localhost:2001/products/${productId}`, updatedProduct)
            .then((res) => {
            // Handle successful edit
            console.log(`Product with ID ${productId} edited.`);
            // You can choose to update the product data on the client if needed
            })
            .catch((err) => {
            console.error(`Error editing product: ${err}`);
            });
        }
    };
    return (
        <>
        <Nextnav/>
            <div className="purrr">
            <div className='add pt-3'>
    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Title</label>
    <input onChange={((e)=> settitle(e.target.value))} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    
    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Price</label>
    <input onChange={((e)=> setprice(e.target.value))} type='number' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>

    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">DiscountPercentage</label>
    <input onChange={((e)=> setdiscountPercentage(e.target.value))} type='number' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>

    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Brand</label>
    <input onChange={((e)=> setbrand(e.target.value))} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>

    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Stock</label>
    <input onChange={((e)=> setstock(e.target.value))} type='number' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>

    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Category</label>
    <input onChange={((e)=> setcategory(e.target.value))} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>

    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Rating</label>
    <input onChange={((e)=> setrating(e.target.value))} type='number' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Description</label>
    <textarea onChange={((e)=> setdescription(e.target.value))} id="exampleInputPassword1" className="form-control"></textarea>
    </div>

    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Images</label>
    <input onChange={((e)=> setimages(e.target.value))} type='file' name='file' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>

    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Thumbnail</label>
    <input onChange={((e)=> setthumbnail(e.target.value))} type='file' name='file' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    
    <button type="submit" className="btn btn-primary" onClick={(e)=> post(e)}>Submit</button>

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
                        <div className="trash d-flex">
                            <button  onClick={() => deleteProduct(el.id)}><i className='bi bi-trash'></i> Delete</button>
                            <button onClick={() => editProduct(el.id)}><i className='bi bi-pencil'></i> Edit</button>
                        </div>
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

export default Admin