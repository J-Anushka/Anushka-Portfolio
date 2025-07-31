
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({ text, delay, className }: { text: string; delay: number; className?: string }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span className={className}>{currentText}</span>;
};


export default function About() {
  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">What have I done?</h2>
          <p className="mt-4 text-2xl text-muted-foreground italic">
             <Typewriter text="I have...." delay={100} />
          </p>
        </div>
      </div>
    </section>
  );
}
