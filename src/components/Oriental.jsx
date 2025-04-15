import React from "react";
import rafiki from '../assets/Images/rafiki.png';
const Oriental = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={rafiki}
          />
        </div>

        {/* Text Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          The unseen of spending three years at Pixelgrade
            <br className="hidden lg:inline-block" />
            years at Pixelgrade
          </h1>
          <p className="mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
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

export default Oriental;
