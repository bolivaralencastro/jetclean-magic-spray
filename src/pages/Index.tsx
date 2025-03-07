
import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Features from '../components/Features';
import Testimonial from '../components/Testimonial';
import HowItWorks from '../components/HowItWorks';
import Comparison from '../components/Comparison';
import FAQ from '../components/FAQ';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <Problem />
      <Features />
      <Testimonial />
      <HowItWorks />
      <Comparison />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
