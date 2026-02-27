export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <img
          src="/logo.png"
          alt="GraceKey Logo"
          className="w-40"
        />

        <div className="space-x-8 hidden md:block">
          <a href="#" className="hover:text-yellow-400 transition">Home</a>
          <a href="#" className="hover:text-yellow-400 transition">About</a>
          <a href="#" className="hover:text-yellow-400 transition">Services</a>
          <a href="#" className="hover:text-yellow-400 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-24">

        <img
          src="/logo.png"
          alt="GraceKey Logo"
          className="w-64 mb-6 drop-shadow-[0_0_25px_rgba(255,215,0,0.8)]"
        />

        <p className="text-lg text-gray-300 mb-8 tracking-wide">
          Unlocking Success With Divine Grace
        </p>

        <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-2xl font-semibold shadow-lg shadow-yellow-500/50 transition">
          Get Started
        </button>

      </div>

      {/* About Section */}
      <section className="mt-32 text-center px-6">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          About GraceKey
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          GraceKey is a divine-inspired platform focused on helping individuals unlock their true potential through guidance, belief, and purpose-driven strategy.
        </p>
      </section>

      {/* Services Section */}
      <section className="mt-32 text-center px-6 pb-20">
        <h2 className="text-3xl font-bold text-yellow-400 mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">
              Personal Growth
            </h3>
            <p className="text-gray-300">
              Guidance to unlock your inner strength and clarity.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">
              Business Strategy
            </h3>
            <p className="text-gray-300">
              Helping brands grow with faith-driven strategy.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">
              Spiritual Mentorship
            </h3>
            <p className="text-gray-300">
              Balance success with divine alignment.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-700 text-gray-500">
        © 2026 GraceKey. All rights reserved.
      </footer>

    </main>
  );
}