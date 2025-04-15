import React from 'react';
import illustration from '../assets/Images/Illustration.png';

const Main = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-7xl text-3xl mb-4 font-medium text-gray-900">
            Lessons and insight
            <br className="hidden lg:inline-block" />
            <span className="text-lime-600">from 8 years</span>
          </h1>
          <p className="mb-8 leading-relaxed">
            Where to grow your business as a photographer: site or social media?
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-lime-600 border-0 py-3 px-8 focus:outline-none hover:bg-lime-700 rounded text-lg">
              Register
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={illustration}
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
