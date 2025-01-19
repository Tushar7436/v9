export const Footer = () => {
  return (
    <div className="relative z-10 pt-10 bg-black">
      <footer className="text-center text-gray-300 pt-20">
        <section className="flex justify-end p-4 border-b border-gray-600"></section>


        <section className="mt-10">
          <div className="container mx-auto text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-between gap-y-12 px-4">
              {/* Column 1 */}
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4">
                <h6 className="uppercase font-bold text-lg mb-4 flex items-center sm-justify-center text-green-300">
                  <i className="fas fa-gem mr-2"></i>Tushar
                </h6>
                <p className="text-sm">
                  This is the question to WHY go all out on a single website even knowing that
                  you do just bad code and nobody doesn't even give a fuck.
                </p>
              </div>

              {/* Column 2 */}
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 px-4">
                <h6 className="uppercase font-bold text-lg mb-4">Discover</h6>
                <ul className="flex flex-wrap justify-center md:flex-col gap-4">
                  <li>
                    <a href="#!" className="text-gray-400 hover:text-green-300">Home</a>
                  </li>
                  <li>
                    <a href="#!" className="text-gray-400 hover:text-green-300">Events</a>
                  </li>
                  <li>
                    <a href="#!" className="text-gray-400 hover:text-green-300">Blog</a>
                  </li>
                  <li>
                    <a href="#!" className="text-gray-400 hover:text-green-300">About us</a>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 px-4">
                <h6 className="uppercase font-bold text-lg mb-4 text-green-300">Social</h6>
                <ul className="flex flex-wrap justify-center md:flex-col gap-4">
                  <li>
                    <a href="#!" className="text-gray-400 hover:text-green-300">LinkedIn</a>
                  </li>
                  <li>
                    <a href="#!" className="text-gray-400 hover:text-green-300">Instagram</a>
                  </li>
                  <li>
                    <a href="#!" className="text-gray-400 hover:text-green-300">Twitter</a>
                  </li>
                  <li>
                    <a href="#!" className="text-gray-400 hover:text-green-300">YouTube</a>
                  </li>
                </ul>
              </div>

              {/* Column 4 */}
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4">
                <h6 className="uppercase font-bold text-lg mb-4">Contacts</h6>
                <p className="mb-2 flex items-start text-sm">
                  <i className="fas fa-home mr-2"></i>
                  Kotri Kalan, Near Indore Road, Bhopal, Madhya Pradesh 466114
                </p>
                <p className="mb-2 flex flex-col md:flex-row items-center text-sm">
                  <i className="fas fa-envelope mr-2"></i>
                  ieeevitbhopal@vitbhopal.ac.in
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Bottom Section */}
        <div className="pt-10 text-center">
          <span className="text-sm">Crafting since </span>
          <span className="text-green-300 text-sm">@2024</span>
          <div
            className="font-semibold text-[60px] md:text-[80px] lg:text-[120px] text-gray-500"
            style={{ fontFamily: '"Doto", sans-serif' }}
          >
            IEEE Student Chapter
          </div>
        </div>
      </footer>
    </div>
  );
};
