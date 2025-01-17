import React from 'react';
import Navbar from './sections/Navbar';
import Hero from  './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Clients from './sections/Clients';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Experience from './sections/Experience';
const App = () => {
  return (
    <div className="min-h-screen bg-gray-900">
       {/* Navbar will be displayed at the top of the page */}
      
      <main className='mx-auto max-w-7xl '>
        
        <Navbar />
        <Hero/>
        <About/>
        <Projects/>
        <Clients/>
        <Experience/>
        <Contact/>
        <Footer/>
        
      </main>
    </div>
  )
}
export default App;