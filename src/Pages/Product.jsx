import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

function Product() {
    const [products, setproducts] = useState(![]); // ![] empty array
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => setproducts(data));
    }, [])

    if (!products) {
        return (
            <div style={{ backgroundColor: "oklch(0.91 0.03 94.89)" }} className="h-screen w-screen flex items-center justify-center">
                <div className="w-14 h-14 border-4 border-blue border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }
function handleAddToCart(id){
    console.log(id)
    if (!isAuthenticated){
        navigate("/login")
    }else{
        navigate(`/product/${id}`)
    }
}



    console.log(products)
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-10">
            <div className="mx-auto max-w-7xl">
                <h1 className="mb-8 text-3xl font-bold text-gray-900">Our Products</h1>

                {/* Card div */}

                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group rounded-lg bg-white p-4 shadow-sm transition hover:shadow-lg"
                        >
                            {/* Product Image */}
                            <div className="flex h-48 items-center justify-center mb-4">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-full object-contain transition group-hover:scale-105"
                                />
                            </div>

                            {/* Category */}
                            <span className="mb-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                                {product.category}
                            </span>

                            {/* Title */}
                            <h2 className="line-clamp-2 text-sm font-medium text-gray-900">
                                {product.title}
                            </h2>

                            {/* Price */}
                            <p className="mt-2 text-lg font-semibold text-gray-900">
                                ${product.price}
                            </p>

                            {/* Rating */}
                            <div className="mt-1 flex items-center gap-1 text-sm text-gray-600">
                                ⭐ {product.rating.rate}
                                <span className="text-xs">({product.rating.count})</span>
                            </div>

                            {/* CTA */}
                            <div className='mt-4 flex justify-center'>
                                <button
                                    onClick={() => handleAddToCart(product.id)}
                                    className="mt-6 w-full rounded-md bg-gray-900 py-2 text-sm text-white transition hover:bg-gray-800"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div style={{display:"flex",justifyContent:"center",marginTop:"25px"}}>
                    <button style={{backgroundColor:"green",color:"white",padding:"7px",borderRadius:"8px",fontSize:"bold"}}>Load more ...</button>
                </div> */}
            </div>

        </div>

    )
}

export default Product
