export default function Services() {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Open Plots', icon: '🏞️', desc: 'Premium open plots in high-growth zones like Tukkuguda and Shabad.' },
            { title: 'Commercial Plots', icon: '🏢', desc: 'Ideal for business hubs, warehouses, malls, and retail spaces.' },
            { title: 'Residential Plots', icon: '🏠', desc: 'Secure your dream home location in peaceful, well-connected neighborhoods.' },
            { title: 'Villas & Independent Houses', icon: '🏰', desc: 'Luxury living with complete privacy and modern amenities.' },
            { title: 'Project Sales', icon: '📈', desc: 'Expert assistance in buying and investing in ongoing real estate projects.' },
            { title: 'Consultation', icon: '💬', desc: 'Get expert advice on property valuation, investment strategy, and ROI analysis.' },
          ].map((service, i) => (
            <div key={i} className="p-6 rounded-lg shadow-md hover:shadow-lg transition bg-white dark:bg-gray-800">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
