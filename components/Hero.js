import React, { useState, useEffect } from 'react';

const Hero = () => {
  const staticText = "Hi, I'm a";
  const dynamicWords = ['Flutter Developer', 'Project Manager', 'Freelancer','Tech Enthusiast'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const currentWord = dynamicWords[currentWordIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === currentWord) {
      typingSpeed = 1000; // Pause before deleting
      setTimeout(() => setIsDeleting(true), typingSpeed);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
    } else {
      setTimeout(() => {
        const updatedText = isDeleting
          ? currentWord.substring(0, displayText.length - 1)
          : currentWord.substring(0, displayText.length + 1);
        setDisplayText(updatedText);
      }, typingSpeed);
    }
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <div className="relative h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center text-white overflow-hidden">
      {/* Background Animation */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-70 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-white text-4xl font-bold cursor-pointer">Nandhini V</h1>
          <ul className="hidden md:flex items-center space-x-8 text-white text-lg font-semibold">
            <li>
              <a href="#about" className="hover:text-blue-500 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition">
                Contact
              </a>
            </li>
          </ul>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setNavOpen(!navOpen)}
          >
            ☰
          </button>
        </div>
        {/* Mobile Menu */}
        {navOpen && (
          <ul className="md:hidden bg-black bg-opacity-90 text-white text-lg font-semibold text-center space-y-4 py-6">
            <li>
              <a href="#about" className="hover:text-blue-500 transition">
               Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition">
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>

      {/* Background Animated Dots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-[400px] h-[400px] bg-purple-500 opacity-10 animate-ping rounded-full blur-3xl absolute -top-10 -left-20"></div>
        <div className="w-[500px] h-[500px] bg-indigo-500 opacity-10 animate-ping rounded-full blur-3xl absolute bottom-20 right-10"></div>
        <div className="w-[300px] h-[300px] bg-blue-500 opacity-10 animate-pulse rounded-full blur-2xl absolute top-20 left-40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between z-10">
        {/* Left Text Section */}
        <div className="text-left w-full md:w-1/2 pr-8 pl-10 pt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {staticText}{' '}
            <span className="text-blue-400">
              {displayText}
              <span className="blinking-cursor">|</span>
            </span>
          </h1>
          <p className="text-lg mb-8">As an innovative and results-driven app developer with 1 year of hands-on experience crafting sleek and efficient mobile applications. Proficient in all aspects of Flutter development, adept at transforming innovative ideas into user-friendly, high-performance apps.</p>
          <div>
            <a
              href=""
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold mr-4 hover:bg-blue-500 transition"
            >
              Download CV
            </a>
            {/* <a
              href="#contact"
              className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition"
            >
              Contact Me
            </a> */}
          </div>
        </div>

   {/* Right Profile Picture Section */}
<div className="md:block w-auto flex items-center justify-center">
    {/* Profile Picture Container */}
    <div className="bg-white-800 p-40 rounded-xl z-20">
        <img
            src="/dash.png"
            alt="Profile"
            className="w-90 h-80 rounded-full object-cover border-4 border-blue-500"
        />
    </div>
</div>
      </div>
    </div>
  );
};

export default Hero;