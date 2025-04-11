import React from 'react';

const Community = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 flex flex-col gap-30 mx-auto">
  {/* Text Content */}
  <div className="flex flex-col text-center w-full mb-16">
  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
    Caring is the new marketing
  </h1>
  <p className="w-[80%] md:w-[60%] lg:w-[40%] mx-auto leading-relaxed text-sm md:text-base mb-4">
    The Nexcent blog is the best place to read about the latest membership insights, trends and more. 
    See who's joining the community, read about how our community are increasing their membership income 
    and lots more.
  </p>
</div>


        {/* Cards Section */}
        <div className="flex flex-wrap gap-8 justify-center text-center">
          {/* Card 1 */}
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-[22%] px-6 py-6 border-l-2 border-gray-200 border-opacity-60 min-h-[200px] flex flex-col justify-between">
            <p className="leading-relaxed text-base font-semibold text-lg mb-2">
              Creating Streamlined Safeguarding Processes with OneRen
            </p>
            <div className="flex justify-center mt-2">
              <a className="text-lime-600 text-lg font-semibold inline-flex items-center" href="#">
                Readmore
                <span className="text-2xl">→</span>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-[21%] px-6 py-6 border-l-2 border-gray-200 border-opacity-60 min-h-[200px] flex flex-col justify-between">
            <p className="leading-relaxed text-base font-semibold text-lg mb-2">
              What are your safeguarding responsibilities and how can you manage them?
            </p>
            <div className="flex justify-center mt-2">
              <a className="text-lime-600 font-semibold text-lg inline-flex items-center" href="#">
                Readmore
                <span className="text-2xl">→</span>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-[19%] px-6 py-6 border-l-2 border-gray-200 border-opacity-60 min-h-[200px] flex flex-col justify-between">
            <p className="leading-relaxed text-base font-semibold text-lg mb-2">
              Revamping the Membership Model with Triathlon Australia
            </p>
            <div className="flex justify-center mt-2">
              <a className="text-lime-600 font-semibold text-lg inline-flex items-center" href="#">
                Readmore
                <span className="text-2xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
