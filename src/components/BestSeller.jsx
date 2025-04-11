import React from 'react';

function BestSeller() {
  return (
    <div>
      <section className="relative text-white bg-slate-800 py-24 bg-cover bg-center bg-no-repeat"
        >
       
        <div className="container px-5 mx-auto relative z-10">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-6xl font-bold title-font mb-4 text-cyan-500" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Our Best-Selling Products
            </h1>
            <p className="lg:w-2/4 mx-auto leading-relaxed text-lg font-medium text-gray-400">
              Explore the most innovative and best-selling tech products that are revolutionizing the industry. From AI-powered devices to cutting-edge smart tech, we’ve got it all.
            </p>
          </div>

          {/* Product Cards */}
          <div className="flex justify-center flex-wrap -m-4">
            {/* Smart Home Hub */}
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="product"
                  className="flex-shrink-0 rounded-lg w-full h-64 object-cover object-center mb-4"
                  src="https://plus.unsplash.com/premium_photo-1716824502184-f5f8816ed2ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNtYXJ0JTIwaG9tZSUyMGh1YnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <div className="w-full flex flex-col items-center">
                  <h2 className="title-font font-semibold text-3xl text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Smart Home Hub
                  </h2>
                  <p className="w-3/4 mb-4 text-md text-gray-400">
                    A powerful hub for your smart devices, providing seamless control over your home automation system.
                  </p>
                </div>
              </div>
            </div>

            {/* Wireless Earbuds */}
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="product"
                  className="flex-shrink-0 rounded-lg w-full h-64 object-cover object-center mb-4"
                  src="https://images.unsplash.com/photo-1566533893210-134327eb8967?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzk2fHx3aXJlbGVzcyUyMGVhcmJ1ZHN8ZW58MHx8MHx8fDA%3D"
                />
                <div className="w-full flex flex-col items-center">
                  <h2 className="title-font font-semibold text-3xl text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Wireless Earbuds
                  </h2>
                  <p className="w-3/4 mb-4 text-md text-gray-400">
                    Enjoy superior sound quality with our ergonomic wireless earbuds, designed for comfort and style.
                  </p>
                </div>
              </div>
            </div>

            {/* Smartwatch */}
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="product"
                  className="flex-shrink-0 rounded-lg w-full h-64 object-cover object-center mb-4"
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=60"
                />
                <div className="w-full flex flex-col items-center">
                  <h2 className="title-font font-semibold text-3xl text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Smartwatch
                  </h2>
                  <p className="w-3/4 mb-4 text-md text-gray-400">
                    A stylish smartwatch with advanced health tracking, notifications, and fitness features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BestSeller;
