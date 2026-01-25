function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      
      <h1 className="text-8xl font-extrabold text-red-500">404</h1>
      
      <p className="mt-4 text-2xl font-semibold">
        Page Not Found
      </p>
      
      <p className="mt-2 text-gray-400 text-center max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <a
        href="/"
        className="mt-6 inline-block px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300"
      >
        Go Back Home
      </a>

    </div>
  );
}

export default NotFound;
