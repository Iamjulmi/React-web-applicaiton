export default function Contact() {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="p-8 rounded-lg shadow-md bg-white dark:bg-gray-800">
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input type="text" placeholder="Your full name" className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email Address</label>
              <input type="email" placeholder="you@example.com" className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea rows="5" placeholder="How can I help?" className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
              Send Message
            </button>
          </form>
          <div className="mt-6 text-center text-sm">
            <p>📍 Ramanthapur & Tukkuguda, Hyderabad</p>
            <p>📞 +91 7008036550</p>
            <p>✉️ chandrashekarjulmi@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
