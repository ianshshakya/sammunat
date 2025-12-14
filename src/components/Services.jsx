export default function Services() {
  return (
    <section className="relative py-24 overflow-hidden text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070b14] via-[#0b1020] to-[#0e1424] pointer-events-none"></div>
      <div className="absolute -top-40 right-0 w-[420px] h-[420px] bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -left-40 w-[420px] h-[420px] bg-cyan-400/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Expertise</span>
          </h3>
          <p className="mt-4 text-gray-300 text-lg">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Web Development",
              desc: "High-performance, responsive websites using modern technologies like React, Next.js, and Tailwind CSS.",
              icon: "bi bi-globe",
              features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
            },
            {
              title: "SaaS Solutions",
              desc: "Scalable and secure cloud applications with robust architecture and seamless integrations.",
              icon: "bi bi-cloud-haze2-fill",
              features: ["Cloud Native", "Scalable", "Secure"],
            },
            {
              title: "Automation",
              desc: "Intelligent process automation to enhance efficiency and reduce operational costs.",
              icon: "bi bi-gear",
              features: ["AI Powered", "Efficient", "Cost Effective"],
            },
            {
              title: "UI/UX Design",
              desc: "User-centered design that creates engaging and intuitive digital experiences.",
              icon: "bi bi-palette",
              features: ["User Research", "Wireframing", "Prototyping"],
            },
            {
              title: "Mobile Apps",
              desc: "Cross-platform mobile applications with native-like performance.",
              icon: "bi bi-phone",
              features: ["React Native", "iOS & Android", "Offline Support"],
            },
            {
              title: "Consulting",
              desc: "Strategic technology consulting to align digital solutions with business goals.",
              icon: "bi bi-lightbulb-fill",
              features: ["Strategy", "Planning", "Implementation"],
            },
          ].map((service, index) => (
            <div
              key={index}
              className="group p-7 rounded-3xl
                         bg-white/10 backdrop-blur-xl
                         border border-white/20
                         shadow-lg shadow-black/10
                         hover:border-cyan-400/40
                         hover:shadow-cyan-500/20
                         hover:-translate-y-2
                         transition-all duration-300"
            >
              <div className="text-xl mb-6">
               <i className={`${service.icon} text-4xl `}></i>
              </div>

              <h4 className="text-xl sm:text-2xl font-semibold mb-4  text-cyan-300">
                {service.title}
              </h4>

              <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                {service.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full
                               bg-white/10 text-cyan-300
                               border border-white/20
                               text-xs sm:text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
