export default function About() {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img src="https://picsum.photos/id/1015/600/400"  alt="Chandrashekar Julmi" className="rounded-lg shadow-md w-full object-cover" />
          </div>
          <div>
            <p className="mb-4">
              With over <strong>8 years of experience</strong>, I specialize in helping clients find the perfect open plots, residential and commercial properties across Hyderabad.
            </p>
            <p className="mb-4">
              My focus has always been on building trust through transparency, market expertise, and personalized service tailored to each client's needs.
            </p>
            <p>
              Whether you're an investor, first-time buyer, or looking for premium land, I provide <strong>data-driven insights</strong> and <strong>strategic guidance</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
