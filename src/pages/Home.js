import React from 'react'
import Resume from "../new-res-3.pdf"
import SocialLinks from '../components/Socials';
import DP from "../Images/dp.jpg";
import vc from "../Images/vc.jpg"
import elite from "../Images/elite.png"
import ecom from "../Images/ecom1.png"
import imdb from "../Images/imdb.png"
import Skills from '../components/Skills';
import Services from "../components/Services"
import Contact from "../components/Contact"
import NavBar from '../components/Navbar';
const Home = () => {
  return (
    <>
  <NavBar />
    <div class="flex justify-center bg-black p-8" id='home'>
      <div class="flex flex-col justify-center">
        <div class="flex flex-col lg:flex-row max-w-7xl justify-center items-center p-2 space-y-3 w-full">
        <div class="flex flex-row mt-20 md: flex flex-col items-start items-center justify-between  space-y-3 px-8">
            <div class="text-cyan-600 text-5xl md:text-7xl font-bold ">
              MERN stack{" "}
            </div>
            <div class="text-cyan-600 text-5xl md:text-7xl font-bold   ">
              Developer
            </div>
          </div>
          <div class="flex ">
            <section class="text-gray-600 body-font">
              <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img
                  class="lg:w-1/4 md:w-1/3 w-5/6 mb-10 object-cover object-center rounded"
                  alt="hero"
                  src={DP}
                />
                <div class="text-center lg:w-2/3 w-full">
                  <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-cyan-600">
                    John Doe
                  </h1>
                  <p class="mb-8 leading-relaxed text-gray-300 font-bold">
                   I'm a Full-stack web developer, i have mentioned the tech-stack that i use,
                   Give me an idea and outline about your project and i will get it done for you from scratch.
                   I have worked with 2 startups in the past and will continue to do so. I'm open for any Freelance work too.
                    
                  </p>
                  <div class="flex justify-center">
                    <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      <a href='#contact'>Hire Me</a>
                    </button>
                    <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                      <a href='#projects'>Visit my past work</a>
                    </button>
                  </div>
                  <button class="inline-flex text-white bg-cyan-600 mt-5 border-0 py-2 px-6 focus:outline-none hover: rounded text-lg">
                      <a href={Resume} download="Resume.pdf">Get My Resume</a>
                    </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>

    
        
        <Skills />
      <Services />

    <section class="text-gray-600 body-font bg-black" id='projects'>
      <div class="head-cont flex">
        <h1 class="text-2xl md:text-[50px] text-white font-bold mx-auto">
          PROJECTS
        </h1>
      </div>

      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -mx-4 -mb-10 text-center">
          <div class="sm:w-1/2 mb-10 px-4">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={ecom}
              />
            </div>
            <h2 class="title-font text-2xl font-medium text-cyan-600 mt-6 mb-3">
              full stack ecommerce site
            </h2>
            <p class="leading-relaxed text-white">
              This project is built on MERN stack, all the advance features like search,payments,product filters are included,
              also i have included a special page for admins, so that they can track all orders and products 
              as the project is live you can visit it by clicking the button below
            </p>
           
            <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
            <a href='https://ecommerce-site-st.herokuapp.com/' target="_blank">
                visit the complete project in detail
            </a>
            </button>
          </div>
          <div class="sm:w-1/2 mb-10 px-4">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={imdb}
              />
            </div>
            <h2 class="title-font text-2xl font-medium text-cyan-600 mt-6 mb-3">
              IMDB clone
            </h2>
            <p class="leading-relaxed text-white">
             This is a complete react based application, which showcases movies and their details,
             features like search, paginations are included. 
            </p>
            <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
            <a href='#' target="_blank">
                visit the complete project in detail
            </a>
            </button>
          </div>
          <div class="sm:w-1/2 mb-10 px-4">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={vc}
              />
            </div>
            <h2 class="title-font text-2xl font-medium text-cyan-600 mt-6 mb-3">
              video calling App
            </h2>
            <p class="leading-relaxed text-white">
              This project is majorly dependent on Socket.io, nodejs, reactjs, 
              it uses a lot of node modules as well, 2 users from anywhere can connect by entering one the id in the site
            </p>
            <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
            <a href='#' target="_blank">
                visit the complete project in detail
            </a>
            </button>
          </div>
          <div class="sm:w-1/2 mb-10 px-4">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={elite}
              />
            </div>
            <h2 class="title-font text-2xl font-medium text-cyan-600 mt-6 mb-3">
              elite edtech 
            </h2>
            <p class="leading-relaxed text-white">
              Built a website for this edtech startup
            </p>
            <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
            <a href='#' target="_blank">
                visit the complete project in detail
            </a>
            </button>
          </div>
        </div>
      </div>
    </section>

    <Contact />

    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
  </>
  )
}

export default Home