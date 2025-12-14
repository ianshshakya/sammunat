export default function Footer() {
  return (
    <footer className="relative bg-white overflow-hidden">

      {/* Soft background accents */}
      <div className="absolute -top-32 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
            
              <h2 className="text-2xl font-semibold tracking-wide">
                Sam<span className="text-blue-600">mun</span>at
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Building modern, scalable digital solutions for
              forward-thinking businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Services</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-blue-600 transition">Web Development</li>
              <li className="hover:text-blue-600 transition">SaaS Solutions</li>
              <li className="hover:text-blue-600 transition">Automation</li>
              <li className="hover:text-blue-600 transition">UI/UX Design</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Company</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-blue-600 transition">About Us</li>
              <li className="hover:text-blue-600 transition">Case Studies</li>
              <li className="hover:text-blue-600 transition">Careers</li>
              <li className="hover:text-blue-600 transition">Blog</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: "bi bi-linkedin", color: "hover:text-blue-600" },
                { icon: "bi bi-instagram", color: "hover:text-pink-500" },
                { icon: "bi bi-twitter-x", color: "hover:text-black" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`w-11 h-11 rounded-xl 
                              bg-white/70 backdrop-blur-md 
                              border border-gray-200 
                              flex items-center justify-center 
                              text-gray-600 ${item.color}
                              hover:shadow-md transition-all`}
                >
                  <i className={`${item.icon} text-lg`}></i>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-gray-200 flex flex-col md:flex-row gap-4 justify-between items-center text-sm text-gray-500">
          <p>© 2025 Sammunat. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-blue-600 transition">Privacy Policy</span>
            <span className="hover:text-blue-600 transition">Terms</span>
            <span className="hover:text-blue-600 transition">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
