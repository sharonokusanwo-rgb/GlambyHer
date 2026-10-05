import { type FormEvent, useState } from "react";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <main className="flex min-h-dvh flex-col bg-[#fffafb] font-[Outfit] text-[#2b1a26] lg:flex-row">
      {/* Image side */}
      <aside className="relative flex h-[34vh] items-end bg-[url('/images/backgroundimg/image1.jpg')] bg-cover bg-center p-6 text-white md:h-[38vh] lg:order-2 lg:h-auto lg:flex-1 lg:p-14">
        <div className="absolute inset-0 bg-[#4a1a3a]/55" />
        <div className="relative max-w-[440px]">
          <h2 className="hidden mb-1.5 font-['Playfair_Display'] text-2xl font-medium lg:mb-3 lg:text-[2.6rem] lg:leading-[1.15] lg:block">
            Beauty that feels like you
          </h2>
          <p className="hidden font-light text-[#f3d9e6] lg:text-[1.05rem] md:pb-6 lg:block">
            Makeup and fashion picked for the woman who owns every room.
          </p>
        </div>
        a
      </aside>

      {/* Form side */}
      <section className="relative -mt-7 flex flex-1 items-start justify-center rounded-t-[28px] bg-[#fffafb] px-6 pb-10 pt-8 md:items-center md:py-12 lg:order-1 lg:mt-0 lg:rounded-none lg:p-12">
        <div className="w-full max-w-[420px]">
          {/* Brand */}
          <a
            href="#"
            className="mb-6 inline-block font-['Playfair_Display'] text-[1.3rem] font-semibold tracking-[0.3px] text-[#7a1f5c]"
          >
            GlambyHer
          </a>

          {/* Header */}
          <header className="mb-6">
            <h1 className="mb-2 font-['Playfair_Display'] text-[1.9rem] font-medium leading-tight">
              Welcome back, gorgeous , how are
            </h1>
            <p className="text-[0.95rem] text-[#7b6874]">
              Sign in to view your orders and favourites.
            </p>
          </header>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[0.85rem] font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@gmail.com"
                className="w-full rounded-xl border border-[#efdde5] bg-white px-4 py-3.5 text-[0.95rem] placeholder:text-[#b9a8b2] transition focus:border-[#b5367f] focus:outline-none focus:ring-4 focus:ring-[#b5367f]/15"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-[0.85rem] font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-[#efdde5] bg-white px-4 py-3.5 text-[0.95rem] placeholder:text-[#b9a8b2] transition focus:border-[#b5367f] focus:outline-none focus:ring-4 focus:ring-[#b5367f]/15"
              />
            </div>

            <div className="flex items-center justify-between text-[0.85rem]">
              <label className="flex cursor-pointer items-center gap-2 text-[#7b6874]">
                <input type="checkbox" className="size-4 accent-[#b5367f]" />
                <span>Remember me</span>
              </label>
              <a
                href="#"
                className="font-medium text-[#b5367f] hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer rounded-full bg-[#7a1f5c] p-[15px] text-base font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#5c1646] hover:shadow-[0_10px_24px_rgba(122,31,92,0.28)] active:translate-y-0 active:shadow-none"
            >
              Sign in
            </button>

            <div className="flex items-center gap-3 text-[0.8rem] text-[#a8949f] before:h-px before:flex-1 before:bg-[#efdde5] after:h-px after:flex-1 after:bg-[#efdde5]">
              or
            </div>

            <button
              type="button"
              className="w-full cursor-pointer rounded-full border border-[#efdde5] bg-white p-[15px] text-base font-medium text-[#2b1a26] transition hover:bg-[#fdf2f6]"
            >
              Continue with Google
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-[0.9rem] text-[#7b6874]">
            New here?{" "}
            <a
              href="#"
              className="font-semibold text-[#b5367f] hover:underline"
            >
              Create an account
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default LoginScreen;
