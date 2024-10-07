import React from 'react';
interface Props {
  htag: string;
  ptag: string;
  btName: string;

}


const Hero = ({ htag, ptag, btName  }: Props) => {
  return (
    <section className="relative  h-[90vh] bg-blue-600 dark:bg-gray-900 text-white py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-[30%]">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            {htag}
          </h1>
          <p className="mt-4 text-lg  leading-6">
            {ptag}
          </p>
          <div className="mt-8">
            <a
              href="#services"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              {btName}
            </a>
          </div>
        </div>
      </div>

      {/* Decorative element */}
     
    </section>
  );
};

export default Hero;
