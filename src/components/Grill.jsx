import React from "react";
import pana from '../assets/images/pana.png';
const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={pana}
          />
        </div>

        {/* Text Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          How to design your site footer like we did
            <br className="hidden lg:inline-block" />
            we did
          </h1>
          <p className="mb-8 leading-relaxed">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-lime-600 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Learn More
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
