
export const Work =() =>{
    return(        
      <section id="work" className="bg-black text-white py-32">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start space-y-12 md:space-y-0 md:space-x-80">
        {/* Left Section: Text */}
        <div className="md:w-1/2 leading-tight">
          <h2 className="text-8xl mb-10 ml-1 tracking-tight">
            Our <span className="text-green-200 ">Work</span>
          </h2>
          <div className="space-y-12 ml-9">
            {/* Entry 1 */}
            <div className="flex items-center justify-between border-b border-gray-700 pb-4">
              <div>
                <p className="text-green-300 font-semibold text-sm mb-3">2024</p>
                <h3 className="text-3xl font-semibold">400+ projects</h3>
              </div>
              <div>
              <span className="text-green-300 text-6xl">
                  <img
                    src="https://framerusercontent.com/images/80ciNZpezWIjtjuOmGuff6aTdc.png"
                    alt="Arrow Icon"
                    className="inline-block w-12 h-12"
                  />
              </span>
              </div>
            </div>
            {/* Entry 2 */}
            <div className="flex items-center justify-between border-b border-gray-700 pb-4">
              <div>
                <p className="text-green-300 font-semibold text-sm mb-3">2024</p>
                <h3 className="text-3xl font-semibold">3,500+ Partners</h3>
              </div>
              <div>
              <span className="text-green-300 text-6xl">
                  <img
                    src="https://framerusercontent.com/images/80ciNZpezWIjtjuOmGuff6aTdc.png"
                    alt="Arrow Icon"
                    className="inline-block w-12 h-12"
                  />
              </span>
              </div>
            </div>
            {/* Entry 3 */}
            <div className="flex items-center justify-between border-b border-gray-700 pb-4">
              <div>
                <p className="text-green-300 font-semibold text-sm mb-3">2024</p>
                <h3 className="text-3xl font-semibold">150+ Clients</h3>
              </div>
              <div>
              <span className="text-green-300 text-6xl">
                  <img
                    src="https://framerusercontent.com/images/80ciNZpezWIjtjuOmGuff6aTdc.png"
                    alt="Arrow Icon"
                    className="inline-block w-12 h-12"
                  />
              </span>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section: Image */}
        <div className="md:w-1/3 pt-16 flex justify-center items-start">
          <img
            src="https://framerusercontent.com/images/CDH3fJpM4aOIliNmllOihTw3x38.png"
            alt="AI network visualization"
            className="rounded-lg object-cover w-[95%] border p-4"style={{ borderColor: 'rgb(45,44,42)' }} // Adjust max height to align with the combined height of text entries
          />
        </div>
      </div>
      </section>     
    
    )
  }