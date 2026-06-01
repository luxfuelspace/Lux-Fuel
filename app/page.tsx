'use client';

import { useEffect, useRef } from 'react';
import Nav from '@/components/nav';
import Hero from '@/components/hero';
import Protocol from '@/components/protocol';
import Inflection from '@/components/inflection';
import Posture from '@/components/posture';
import Closing from '@/components/closing';
import Footer from '@/components/footer';
import SpaceBackground from '@/components/space-background';

export default function Home() {
  const revealObserverRef = useRef<IntersectionObserver | null>(null);
  const closingObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Setup reveal animations
    revealObserverRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserverRef.current?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.25,
      rootMargin: '0px 0px -120px 0px'
    });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => revealObserverRef.current?.observe(el));

    // Setup closing section animation
    closingObserverRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          closingObserverRef.current?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    });

    const closingSection = document.getElementById('closing');
    if (closingSection) {
      closingObserverRef.current.observe(closingSection);
    }

    return () => {
      revealObserverRef.current?.disconnect();
      closingObserverRef.current?.disconnect();
    };
  }, []);

  return (
    <>
      <SpaceBackground />
      <Nav />
      <main>
        <Hero />
        <Protocol />
        <Inflection />
      </main>
      <Posture />
      <Closing />
      <Footer />
    </>
  );
}
