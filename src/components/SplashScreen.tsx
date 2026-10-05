import Button from "./ui/button";


function SplashScreen() {
  return (
    <div
      className="min-h-screen flex flex-col bg-center bg-cover bg-no-repeat px-4 py-6 md:px-12 md:py-10 lg:px-32 xl:px-48"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url('/images/backgroundimg/splashscreenbg.jpg')",
      }}
    >
      {/* Navbar */}
      <div className="flex justify-between items-center px-2 py-4 md:px-6">
        <h1 className="text-2xl md:text-4xl font-bold text-purple-600">
          GlambyHer
        </h1>
        <Button buttonText="Sign in" className="" />
      </div>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 px-2 md:px-6">
        <h2 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white">
          Your glam, on demand
        </h2>
        <p className="text-white max-w-md font-bold text-sm md:text-base">
          Book top beauty professionals near you in a few taps.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md sm:max-w-xl">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-white text-gray-200 font-semibold px-4 py-3 rounded-sm outline-none bg-transparent"
          />
          <Button
            buttonText="Get Started"
            className="px-6 py-3 rounded-sm bg-purple-600 text-white font-medium whitespace-nowrap"
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
