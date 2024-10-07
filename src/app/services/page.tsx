"use client"

import { useState } from 'react';

import Layout from '../components/Layout';

import Image from 'next/image';
import about from '../public/about.jpg';
import Hero from '../components/hero';

const services = [
  {
    title: "Support for Individualized Education Plans (IEPs)",
    content: "Help families ensure every child's needs are satisfied by guiding them through the IEP process, from assessments to goal-setting."
  },
  {
    title: "Academic Coaching",
    content: "Assist your child with specialized one-on-one tutoring sessions focused on their subject areas and learning style."
  },
  {
    title: "Assessments of Learning",
    content: "Perform thorough evaluations to pinpoint areas of strength and development, guiding the development of individualized support plans."
  },
  {
    title: "Development of Executive Functioning Skills",
    content: "Assist kids in developing the time management, organization, and study habits necessary to succeed academically."
  },
  {
    title: "Support with Social-Emotional Learning (SEL)",
    content: "To create a well-rounded educational experience, establish effective methods that support social skills, emotional intelligence, and resilience."
  },
  {
    title: "Family-Friendly Workshops",
    content: "Provide seminars on handling homework challenges, fostering learning at home, and effective communication."
  },
  {
    title: "Professional Development and Training for Teachers",
    content: "Provide teachers training to ensure that they can improve their instruction methods and comprehension of the various types of learning demands."
  },
  {
    title: "Consultation for School Programs",
    content: "Work with educational institutions to create or enhance initiatives promoting inclusivity and equity for all students."
  },
  {
    title: "Planning for Transitions",
    content: "Encourage pupils and their families to transition from one grade level to the next, from one school to a post-secondary institution."
  },
  {
    title: "Services for Resources and Referrals",
    content: "Provide families with links to other resources, such as counseling, tutoring, and support programs for special education."
  }
];
export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <Layout>

      <Hero
        htag="Empowerful LLC"
        ptag="Strengthening the bond between families and schools with personalized consulting services."
        btName="Learn More"

      />
      {/* About Section */}
      <div className='w-[90%] m-auto  gap-5  md:w-[80%]'>

        <div className='md:flex md:w-full gap-5 mt-10 justify-evenly'>

          <div className='md:w-1/2  w-full  items-start justify-start  text-start md:m-10 bg-slate-100 m-6 text-x md:h-100'>
            <h2 className="text-3xl md:text-4xl text-black   text-center font-bold">What we can offer</h2>
            <p className="mt-10 max-w-3xl text-black mx-auto text-start ">
              A world where schools and families work hand-in-hand to create inclusive, supportive learning environments that empower every child.
              We believe that collaboration between educators and families is key to fostering a culture of belonging,
              where diversity is celebrated and all students are encouraged to thrive.

            </p>
          </div>
          <div className='md:w-1/2 md:h-[40vh]'>
            <Image style={{ width: "100%", height: "auto" }} src={about} alt='Our Mission' />
          </div>
        </div>
      </div>




      <div className="min-h-screen p-8 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">Our Services</h1>
        <p className="text-lg text-center mb-12 text-gray-700 max-w-3xl mx-auto">
          At Empowerful LLC, we offer various personalized consulting services to meet the unique needs of families and schools. Here’s how we can assist you:
        </p>

        <ul className="space-y-4 max-w-3xl mx-auto">
          {services.map((service, index) => (
            <li key={index} className="border-b border-gray-300">
              <div className='flex flex-row justify-evenly text-center '>
                <button
                  className="w-full text-left py-4 font-semibold text-blue-700 hover:text-blue-900"
                  onClick={() => toggleExpand(index)}
                >
                  {service.title}


                </button>
                <svg onClick={() => toggleExpand(index)} className="w-6 h-6 text-gray-800 mt-4 dark:blue-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M11.403 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6.403a3.01 3.01 0 0 1-1.743-1.612l-3.025 3.025A3 3 0 1 1 9.99 9.768l3.025-3.025A3.01 3.01 0 0 1 11.403 5Z" clip-rule="evenodd" />
                  <path fill-rule="evenodd" d="M13.232 4a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v5.768a1 1 0 1 1-2 0V6.414l-6.182 6.182a1 1 0 0 1-1.414-1.414L17.586 5h-3.354a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
                </svg>


              </div>


              {expandedIndex === index && (
                <div className="px-4 pb-4 text-gray-700">
                  {service.content}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-12 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Let’s Connect!</h2>
          <p className="text-lg mb-4 text-gray-700">
            Make an appointment with us right away if you´re prepared to discuss how we might improve your academic path. Considering your child´s needs, we can design a helpful road map.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="How can we assist you?"
              className="w-full p-3 border border-gray-300 rounded-md"
            ></textarea>
            <button className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800">
              Submit
            </button>
          </form>
        </div>
      </div>


    </Layout>
  );
}


