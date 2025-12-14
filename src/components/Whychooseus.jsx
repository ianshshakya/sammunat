export default function Whychooseus() {
  return (
    <section className="relative py-20 overflow-hidden text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070b14] via-[#0b1020] to-[#0e1424] pointer-events-none"></div>
      <div className="absolute -top-32 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Choose</span> Sammunat
          </h3>
          <p className="mt-4 text-gray-300 text-lg">
            Technology, design, and execution focused on measurable impact
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left – Reasons */}
          <div className="space-y-6">
            {[
              {
                title: "Modern Tech Stack",
                desc: "Future-ready technologies built for scalability and performance.",
                icon: "bi bi-lightning-charge-fill",
              },
              {
                title: "User-Focused Design",
                desc: "Interfaces designed to convert, retain, and engage users.",
                icon: "bi bi-bullseye",
              },
              {
                title: "Agile Development",
                desc: "Fast iterations with flexibility and continuous improvements.",
                icon: "bi bi-arrow-repeat",
              },
              {
                title: "Transparent Communication",
                desc: "Clear updates and collaboration at every project stage.",
                icon: "bi bi-chat-dots-fill",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-2xl
                           bg-white/10 backdrop-blur-xl
                           border border-white/20
                           hover:border-cyan-400/40
                           hover:shadow-cyan-500/20
                           transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl
                                bg-gradient-to-br from-blue-500 to-cyan-400
                                flex items-center justify-center text-black text-xl">
                  <i className={item.icon}></i>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right – Analytics Card */}
          <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl 
                          border border-white/20 shadow-xl p-6 sm:p-8">

            <h4 className="text-xl font-semibold mb-6">
              Performance Overview
            </h4>

            {/* Graph */}
            <div className="space-y-5">
              {[
                { label: "System Performance", value: "85%" },
                { label: "User Engagement", value: "92%" },
                { label: "Scalability", value: "88%" },
                { label: "Client Satisfaction", value: "98%" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm font-medium mb-1">
                    <span className="text-gray-300">{stat.label}</span>
                    <span className="text-cyan-300">{stat.value}</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                      style={{ width: stat.value }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-sm text-gray-400">
              Based on recent project metrics
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
