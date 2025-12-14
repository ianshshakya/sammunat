export default function About() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-white text-gray-900">

      <div className="absolute -top-32 sm:-top-40 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-blue-200/40 rounded-full blur-3xl"></div>

      <div className="absolute top-1/3 -left-32 sm:-left-40 
                      w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] 
                      bg-cyan-200/40 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Driving Digital Transformation
          </h3>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
            Sammunat is a technology partner focused on delivering modern,
            scalable digital solutions. We combine strong engineering
            with business insight to build products that create impact.
          </p>
        </div>

      
        <div className="mt-12 sm:mt-16 lg:mt-20 
                        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                        gap-6 sm:gap-8">
          {[
            { icon: "bi bi-rocket-takeoff", title: "Innovation First", desc: "Future-ready digital solutions" },
            { icon: "bi bi-gem", title: "Premium Quality", desc: "Crafted with precision & care" },
            { icon: "bi bi-lightning-charge", title: "Fast Delivery", desc: "Speed without sacrificing quality" },
            { icon: "bi bi-people", title: "True Partnership", desc: "Collaborative & transparent approach" },
          ].map((item, index) => (
            <div
              key={index}
              className="group p-6 sm:p-7 rounded-2xl
                         bg-white/70 backdrop-blur-xl
                         border border-cyan-800/60
                         shadow-sm hover:shadow-lg
                         hover:border-blue-300/60
                         transition-all duration-300
                         text-center sm:text-left hover:scale-110"
            >
              <div className="text-3xl mb-4 text-blue-600">
                <i className={item.icon}></i>
              </div>

              <h4 className="text-lg sm:text-xl font-semibold mb-2">
                {item.title}
              </h4>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
