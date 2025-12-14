export default function Cta() {
  return (
    <section className="relative py-20 overflow-hidden bg-white">

      {/* Soft background accents */}
      <div className="absolute -top-32 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-cyan-100/60 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Glass CTA Card */}
        <div className="p-10 sm:p-14 rounded-3xl
                        bg-white/70 backdrop-blur-xl
                        border border-gray-200/60
                        shadow-xl">

          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Ready to Transform Your Digital Presence?
          </h3>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Let’s discuss how we can help you achieve your business goals
            with custom, scalable digital solutions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-xl
                               bg-gradient-to-r from-blue-600 to-cyan-500
                               text-white font-semibold text-lg
                               shadow-lg hover:shadow-xl
                               hover:scale-105 transition-all duration-300">
              Schedule a Call
            </button>

            <button className="px-8 py-4 rounded-xl
                               border-2 border-gray-300
                               text-gray-700 font-semibold text-lg
                               hover:border-blue-400 hover:text-blue-600
                               hover:bg-blue-50
                               transition-all duration-300">
              View Case Studies
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
