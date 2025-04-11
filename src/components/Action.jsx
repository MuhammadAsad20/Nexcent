import React from 'react';

function Action() {
  return (
    <section className="text-black body-font bg-white flex items-center justify-center ">
      {/* Content */}
      <div className="container px-5 py-24 mx-auto text-center">
        <h1
          className="sm:text-6xl text-4xl font-bold mb-8"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Pellentesque suscipit <br /> fringilla libero eu.
        </h1>

        <button className="text-white bg-lime-600 border-0 py-3 px-10 focus:outline-none hover:bg-cyan-600 rounded text-lg font-bold inline-flex items-center justify-center gap-2">
          Get a Demo
          <span className="text-2xl">→</span>
        </button>
      </div>
    </section>
  );
}

export default Action;
