export default function Home() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-700 to-purple-700 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://picsum.photos/id/1015/1600/900')",  backgroundSize: 'cover' }}></div>
      <div className="relative z-10 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Trusted Real Estate Partner in Hyderabad</h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">Find the best open plots, villas, and commercial properties across Tukkuguda, Shabad, and more.</p>
        <a href="/projects" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105 inline-block">
          Explore Projects
        </a>
      </div>
    </section>
  );
}
