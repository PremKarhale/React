// Fetching API using Use Effect Route 
import React, { useEffect, useState } from "react";

function Fetching() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-10">

            {/* Heading */}
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
                📦 Fetching Todos
            </h1>

            {/* Grid */}
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
                    >
                        {/* ID Badge */}
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold mb-4">
                            {product.id}
                        </div>

                        {/* Title */}
                        <p className="text-gray-800 font-semibold mb-4 line-clamp-2">
                            {product.title}
                        </p>

                        {/* Status */}
                        <span
                            className={`inline-block px-4 py-1 text-sm font-semibold rounded-full
                            ${product.completed
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                                }`}
                        >
                            {product.completed ? "Completed ✅" : "Not Completed ❌"}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Fetching;
