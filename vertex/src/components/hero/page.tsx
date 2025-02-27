export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Professional Video Editing Services
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-300">
          We help brands, businesses, and creators produce visually stunning,
          high-quality video content.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg font-medium transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
