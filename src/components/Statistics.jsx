import React from "react";

import Logo1 from "../assets/images/Logo1.png";
import Logo2 from "../assets/images/Logo2.png";
import Logo3 from "../assets/images/Logo3.png";
import Logo4 from "../assets/images/Logo4.png";
import Logo5 from "../assets/images/Logo5.png";
import Logo6 from "../assets/images/Logo6.png";

const Statistics = () => {
  // ✅ Use imported images directly for better asset management
  const icons = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo3];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col text-center w-full mb-5">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Our Clients
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed font-medium text-base">
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-6 text-center">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 px-4 py-6 rounded-lg"
            >
              <img
                src={icon}
                alt={`logo-${index + 1}`}
                className="w-14 h-14 mx-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
