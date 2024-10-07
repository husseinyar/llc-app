"use client"
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import heroImage from './public/heroImge.jpg'; // Ensure the path is correct
import OurMission from "./public/Ourmission.jpg";
import OurVision from "./public/OurVision.jpg";
import Link from 'next/link';


export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    let scrollPosition = 0;

    const handleScroll = () => {
      if (window.scrollY < scrollPosition) {
        setShowPopup(true);
        window.removeEventListener('scroll', handleScroll);
      }
      scrollPosition = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>Empowerful LLC - Home</title>
        <meta name="description" content="Empowering Families & Schools for Lifelong Learning" />
      </Head>

      {/* Hero Section */}
      <div className="relative h-[100vh] bg-blue-600 text-white flex items-center">
        <div className="absolute inset-0 opacity-40">
          <Image src={heroImage} alt="Hero Image" layout="fill" objectFit="cover" />
        </div>
        <div className="relative flex flex-col items-cente  w-[80%] justify-center m-auto  px-4">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            Empowering Families & Schools for Lifelong Learning
          </h1>
          <p className="text-lg mt-4 max-w-xl">
            At Empowerful, we believe that when families and schools work together, students thrive. Our programs are designed to foster strong partnerships and equip both families and educators with the
            Empowered Collaboration

          </p>
          <div className="mt-10  flex items-center justify-start gap-x-6">
          <Link href={"/services"}
              
                className="rounded-md cursor-pointer  bg-yellow-400  px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link href={"/about"} className="text-sm hover:p-3 cursor-pointer translate-x-4 hover:bg-yellow-300 rounded-lg border-y-cyan-800 dark:text-white font-semibold transition leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
    

        </div>

      </div>

      {/* Popup Section */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg transform transition duration-500 scale-105">
            <h2 className="text-2xl font-bold mb-4">Welcome to Empowerful LLC!</h2>
            <p className="mb-4"> We´re here to empower your family and school with personalized solutions.</p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Vision & Mission Section */}
      <section className="py-16 text-center bg-white text-black px-4">
        <div className='md:flex md:w-full mt-10 justify-evenly'>
          <div className='md:w-1/2 m-auto'>
            <h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
            <p className="mt-4 max-w-3xl mx-auto text-start ">
              A world where schools and families work hand-in-hand to create inclusive, supportive learning environments that empower every child.
              We believe that collaboration between educators and families is key to fostering a culture of belonging,
              where diversity is celebrated and all students are encouraged to thrive.

            </p>
          </div>
          <div className='md:w-1/2'>
            <Image style={{ width: "100%", height: "auto" }} src={OurVision} alt='Our Mission' />
          </div>
        </div>

        {/* Mission Section */}
        <div className='md:flex mt-10 justify-evenly'>
          <div className='md:w-1/2'>
            <Image style={{ width: "100%", height: "auto" }} src={OurMission} alt='Our Vision' />
          </div>
          <div className='md:w-1/2'>
            <h2 className="text-3xl md:text-4xl font-bold mt-16">Our Mission</h2>
            <p className="mt-4 max-w-3xl mx-auto">
              Empowerful LLC works with families and schools to provide individualized consulting services that enhance learning environments, promote inclusivity, and foster strong family-school collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white text-black py-16 px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">How We Support You</h2>
          <p className="mt-4">Our consulting services are designed to meet your unique needs.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Service cards */}
          <div className="bg-gray-100 text-black p-6 shadow-lg rounded-lg text-center transition transform hover:scale-105">
            <h3 className="text-xl font-bold">IEP Support</h3>
            <p className="mt-2">Guiding families through the IEP process for individualized student plans.</p>
          </div>
          <div className="bg-gray-100 text-black p-6 shadow-lg rounded-lg text-center transition transform hover:scale-105">
            <h3 className="text-xl font-bold">Academic Coaching</h3>
            <p className="mt-2">One-on-one tutoring sessions to help students achieve academic success.</p>
          </div>
          <div className="bg-gray-100 text-black p-6 shadow-lg rounded-lg text-center transition transform hover:scale-105">
            <h3 className="text-xl font-bold">SEL Support</h3>
            <p className="mt-2">Promoting emotional intelligence and resilience for a well-rounded education.</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href={"./services"} className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 text-center px-4 bg-white text-black">
        <h2 className="text-3xl md:text-4xl font-bold">What Our Partners Say</h2>
        <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <blockquote className="bg-gray-100 p-6 shadow-lg rounded-lg">
            <p className="text-gray-700">
              “Empowerful helped our school implement better teaching strategies, and now our students are more engaged than ever!”
            </p>
            <footer className="mt-4 text-gray-500">- Principal, Riverbend Elementary</footer>
          </blockquote>
          <blockquote className="bg-gray-100 p-6 shadow-lg rounded-lg">
            <p className="text-gray-700">
              “Thanks to Empowerful, we have a better understanding of our child´s learning needs and how to support them.”
            </p>
            <footer className="mt-4 text-gray-500">- Parent, Willow Creek High School</footer>
          </blockquote>
        </div>
      </section>

      <section className="py-16   text-center px-4 bg-slate-500 text-white">
        <div className='py-4 w-[80%] m-auto  items-center text-center'>
          <h1 className='mb-7 md:text-3xl text-xl font-bold'>Collaborative Impact</h1>
          <div className='w-[100%] m-auto text-start'>
            By fostering strong family-school partnerships, Empowerful
            is transforming the educational landscape. Our programs and
            resources empower
            families and educators to work together to create vibrant
          </div>

        </div>

        <Link href={"/services"} className=" m-10 w-[200px] bg-red-300  text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-100 hover:text-black transition">

          Start Collaborating
        </Link>
      </section>


    </Layout>
  );
}
