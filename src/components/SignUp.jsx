import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

function SignUp() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")


    // use to Auth or connect to firebase !
    function handlesingup(e) {
        e.preventDefault(); // ⛔ VERY IMPORTANT

        const URL =
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAhvMi5mMtUcsMSQD6WAyYDoWgtDxLp_Yo";

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
                    console.log("Signup success:", data);
                    alert("Account created successfully!");
                    navigate("/products")
                }
            })
            .catch((err) => console.log(err));
    }



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

                {/* Heading */}
                <h1 className="text-2xl font-bold text-gray-900 text-center">
                    Create Account
                </h1>
                <p className="mt-1 text-center text-sm text-gray-500">
                    Sign up to get started
                </p>

                {/* Form */}
                <form onSubmit={handlesingup} className="mt-6 space-y-4">
                    {/* Email */}
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                            onChange={(e) => { setEmail(e.target.value) }}
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
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                            onChange={(e) => { setpassword(e.target.value) }}
                        />
                    </div>

                    {/* Button */}
                    <button 
                        type="submit"
                        className="mt-2 w-full rounded-lg bg-gray-900 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Footer */}
                <p className="mt-6 text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link to={'/login'}>
                    <span className="cursor-pointer font-medium text-gray-900 hover:underline">
                        Login
                    </span>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default SignUp;
