import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    // Login with Firebase
    function handleLogin(e) {
        e.preventDefault(); // ⛔ prevent page refresh

        const URL =
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAhvMi5mMtUcsMSQD6WAyYDoWgtDxLp_Yo";

        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    console.log("Firebase Error:", data.error.message);
                    alert(data.error.message);
                } else {
                    console.log("Login success:", data);
                    alert("Logged in successfully!");
                    // ✅ SAVE TOKEN
                    localStorage.setItem("token", data.idToken);
                    navigate("/products");


                }
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

                {/* Heading */}
                <h1 className="text-2xl font-bold text-gray-900 text-center">
                    Welcome Back
                </h1>
                <p className="mt-1 text-center text-sm text-gray-500">
                    Login to your account
                </p>

                {/* Form */}
                <form onSubmit={handleLogin} className="mt-6 space-y-4">

                    {/* Email */}
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="mt-2 w-full rounded-lg bg-gray-900 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
                    >
                        Login
                    </button>
                </form>

                {/* Footer */}
                <p className="mt-6 text-center text-sm text-gray-500">
                    Don’t have an account?{" "}
                    <Link to="/signup">
                        <span className="cursor-pointer font-medium text-gray-900 hover:underline">
                            Sign Up
                        </span>
                    </Link>
                </p>

            </div>
        </div>
    );
}

export default Login;
