"use client";

import Layout from '../components/Layout';
import Head from 'next/head';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Empowerful LLC - About Us</title>
        <meta name="description" content="Discover Empowerful LLC and how we enhance educational experiences through strong family-school partnerships." />
      </Head>

      <header className="bg-blue-500 mt-10  text-white text-center py-20">
        <h1 className="md:text-4xl font-bold">About Empowerful LLC</h1>
      </header>

      <section className="py-12 md:max-w-2xl text-xl  w-[80%] mx-auto">
        <h2 className="md:ext-4xl font-bold text-black underline mb-4">Welcome to Empowerful LLC</h2>
        <p className="text-black text-start  mb-8">
          At Empowerful LLC, we are passionate about collaborating with families and schools to enhance the educational experiences of students. Our mission is founded on the belief that every child deserves individualized support on their academic journey. We are dedicated to providing tailored resources and strategies that empower both educators and families.
        </p>

        <h3 className="md:text-3xl font-bold text-black underline mb-4">Our Philosophy</h3>
        <p className="text-black text-start mb-8">
          Every student should have a distinctive and enriching educational experience. We believe in personalized, student-centered approaches that cater to each child´s unique needs, ensuring that every student reaches their full potential.
        </p>

        <h3 className="md:text-3xl font-bold text-black underline mb-4">What We Do at Empowerful LLC</h3>
        <p className="text-black text-start ">
          We are committed to fostering strong partnerships between families and schools. Our programs are designed to promote collaboration, trust, and open communication. By empowering both families and educators, we help create transformative educational experiences that inspire positive change.
        </p>
        <p className="text-black text-start  mt-4">
          Through workshops, resources, and personalized consulting, we guide families and educators to build environments that allow students to flourish. Our goal is to redefine the educational experience by bridging the gap between families and schools, ensuring that every child has access to the support they need to succeed.
        </p>
      </section>
    </Layout>
  );
}
