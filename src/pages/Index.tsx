
import React, { useEffect } from 'react';
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
  useEffect(() => {
    // Scroll reveal animation trigger
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.scroll-reveal');
      
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('revealed');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once to reveal elements that are already in view
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section when clicking anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Preload images for better UX
  useEffect(() => {
    const images = [
      'https://source.unsplash.com/photo-1485827404703-89b55fcc595e',
      'https://source.unsplash.com/photo-1721322800607-8c38375eef04'
    ];
    
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

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
