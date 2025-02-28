export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative text-center max-w-2xl px-6 bg-[#18122B]/70 p-10 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#B4A5D4]">
          Professional Video Editing Services
        </h1>
        <p className="text-lg md:text-xl mb-6 text-[#E0CFF2]">
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
