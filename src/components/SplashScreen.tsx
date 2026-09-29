function SplashScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-4xl font-bold text-pink-600">GlambyHer</h1>
        <button className="px-4 py-2 rounded-full bg-pink-600 text-white font-medium hover:bg-pink-700">
          Sign in
        </button>
      </div>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 gap-4">
        <h2 className="text-3xl font-semibold">Your glam, on demand</h2>
        <p className="text-gray-500 max-w-md">
          Book top beauty professionals near you in a few taps.
        </p>
        <button className="px-6 py-3 rounded-full bg-pink-600 text-white font-medium">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default SplashScreen;