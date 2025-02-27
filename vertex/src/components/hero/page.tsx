export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-white bg-cover bg-center">
      <div className="text-center max-w-2xl px-6 bg-[#18122B] bg-opacity-80 p-10 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#635985]">
          Professional Video Editing Services
        </h1>
        <p className="text-lg md:text-xl mb-6 text-[#443C68]">
          We help brands, businesses, and creators produce visually stunning,
          high-quality video content.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-[#393053] hover:bg-[#443C68] text-white rounded-lg text-lg font-medium transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
