export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold text-yellow-400">GraceKey</h1>

        <div className="space-x-8 hidden md:block">
          <a href="#" className="hover:text-yellow-400 transition">Home</a>
          <a href="#" className="hover:text-yellow-400 transition">About</a>
          <a href="#" className="hover:text-yellow-400 transition">Services</a>
          <a href="#" className="hover:text-yellow-400 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-24">
        <h2 className="text-6xl font-extrabold text-yellow-400 mb-4 drop-shadow-[0_0_25px_rgba(255,215,0,0.8)]">
          GraceKey
        </h2>

        <p className="text-lg text-gray-300 mb-8 tracking-wide">
          Unlocking Success With Divine Grace
        </p>

        <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-2xl font-semibold shadow-lg shadow-yellow-500/50 hover:scale-105 transition duration-300">
          Get Started
        </button>
      </div>

      {/* About Section */}
      <section className="mt-32 px-10 text-center">
        <h3 className="text-3xl font-bold text-yellow-400 mb-6">About GraceKey</h3>
        <p className="max-w-2xl mx-auto text-gray-300">
          GraceKey is a divine-inspired platform focused on helping individuals 
          unlock their true potential through guidance, belief, and purpose-driven strategy.
        </p>
      </section>

      {/* Services Section */}
      <section className="mt-24 px-10 text-center">
        <h3 className="text-3xl font-bold text-yellow-400 mb-10">Our Services</h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-semibold text-yellow-400 mb-4">Personal Growth</h4>
            <p className="text-gray-400">Guidance to unlock your inner strength and clarity.</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-semibold text-yellow-400 mb-4">Business Strategy</h4>
            <p className="text-gray-400">Helping brands grow with faith-driven strategy.</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-semibold text-yellow-400 mb-4">Spiritual Mentorship</h4>
            <p className="text-gray-400">Balance success with divine alignment.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-32 px-10 text-center">
        <h3 className="text-3xl font-bold text-yellow-400 mb-8">Contact Us</h3>

        <form className="max-w-xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-xl bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-xl bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
          />

          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded-xl bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-2xl font-semibold shadow-lg shadow-yellow-500/50 hover:scale-105 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="mt-24 py-6 text-center text-gray-500 border-t border-gray-800">
        © 2026 GraceKey. All rights reserved.
      </footer>

    </main>
  );
}