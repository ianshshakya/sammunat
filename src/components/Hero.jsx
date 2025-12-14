export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      
     
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <div className="inline-flex items-center px-4 py-1.5 rounded-full 
                          bg-white/10 backdrop-blur-md border border-white/20 
                          text-sm text-blue-300 font-medium mb-6">
            <i className="bi bi-lightbulb"></i> &nbsp; Innovating Digital Solutions
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-tight">
            Building
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Smart Digital Solutions
            </span>
            for Tomorrow
          </h2>

          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            Sammunat transforms businesses with scalable technology, 
            modern web solutions, and innovation-driven development 
            that delivers measurable results.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="px-7 py-3.5 rounded-xl 
                               bg-gradient-to-r from-blue-500 to-cyan-400 
                               text-black font-semibold 
                               shadow-lg shadow-blue-500/20 
                               hover:scale-105 transition-all duration-300">
              Start Your Project
            </button>

            <button className="px-7 py-3.5 rounded-xl 
                               border border-white/30 
                               text-gray-200 
                               hover:border-blue-400 hover:text-white 
                               transition-all duration-300 font-medium">
              View Our Work
            </button>
          </div>

          <div className="mt-12 flex items-center gap-10 text-sm">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                150+
              </div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>

            <div className="h-10 w-px bg-white/20" />

            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">
          <div className="relative w-full aspect-square max-w-lg mx-auto overflow-hidden rounded-3xl">
            
            {/* Glow Layers */}
            <img className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-400/30" src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg" alt="hero-image"/>

            {/* Glass Card */}
            <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl 
                            border border-white/20 shadow-2xl overflow-hidden">
              <div className="p-6">
                
                {/* Window Controls */}
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>

               
                <div className="space-y-4">
                  <div className="h-3 bg-gradient-to-r from-blue-400/30 to-cyan-300/30 rounded-full w-3/4" />
                  <div className="h-3 bg-gradient-to-r from-blue-300/20 to-cyan-200/20 rounded-full w-full" />
                  <div className="h-3 bg-gradient-to-r from-blue-400/30 to-cyan-300/30 rounded-full w-2/3" />
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
