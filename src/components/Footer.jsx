export const Footer = () => {
    return (
      <div className="pt-32 bg-black">
      <footer className="text-center  text-white-300 pt-20">
        <section className="flex flex-end p-4 border-b border-gray-600"></section>
        {/* Section: Links */}
        <section className="mt-10"> {/* Increased the margin-top */}
          <div className="container mx-auto text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-between gap-y-8"> {/* Added gap-y-8 for larger spacing */}
              {/* Column 1 */}
              <div className="w-full md:w-1/3 lg:w-1/4 px-4">
                <h6 className="uppercase font-bold text-lg mb-4 flex items-center text-green-300">
                  <i className="fas fa-gem mr-2"></i>IEEE Club
                </h6>
                <p>
                  This is the question to WHY go all out on a single website 
                  even knowing that you do just bad code and nobody doesn't even give 
                  a fuck.
                </p>
              </div>
      
              {/* Column 2 */}
              <div className="w-full md:w-1/4 lg:w-1/6 px-4">
                <h6 className="uppercase font-bold text-lg mb-4">Discover</h6>
                <ul>
                  <li className="mb-2">
                    <a href="#!" className="text-gray-600 hover:text-green-300">Home</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-gray-600 hover:text-green-300">Events</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-gray-600 hover:text-green-300">Blog</a>
                  </li>
                  <li>
                    <a href="#!" className="text-gray-600 hover:text-green-300">About us</a>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="w-full md:w-1/4 lg:w-1/6 px-4">
                <h6 className="uppercase font-bold text-lg mb-4 text-green-300">Social</h6>
                <ul>
                  <li className="mb-2">
                    <a href="#!" className="text-gray-600 hover:text-green-300">LinkedIn</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-gray-600 hover:text-green-300">Instagram</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-gray-600 hover:text-green-300">Twitter</a>
                  </li>
                  <li>
                    <a href="#!" className="text-gray-600 hover:text-green-300">YouTube</a>
                  </li>
                </ul>
              </div>

              {/* Column 4 */}
              <div className="w-full md:w-1/3 lg:w-1/4 px-4 ">
                <h6 className="uppercase font-bold text-lg mb-4">Contacts</h6>
                <p className="mb-2 flex items-center">
                  <i className="fas fa-home mr-2"></i> Kotri Kalan, Near Indore Road, Bhopal, Madhya Pradesh 466114
                </p>
                <p className="mb-2 flex items-center">
                  <i className="fas fa-envelope mr-2"></i> ieeevitbhopal@vitbhopal.ac.in
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright */}
        <div className="pt-20">
          <span>Crafting since</span><span className="text-green-300">@2024</span>
          <div className="font-semibold text-[120px] text-white-500" style={{ fontFamily: '"Doto", sans-serif' }}> IEEE Student Chapter</div>
        </div>
        {/* Copyright */}
      </footer>  
      </div>
    );
  };

