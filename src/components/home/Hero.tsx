import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TechoriAnimation from "./Threejs";
const Hero = () => {
  return (
    <div className="relative bg-techori-dark text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <canvas id="particle-canvas" className="w-full h-full"></canvas>
      </div>
      <div className="container mx-auto px-4 py-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Innovative IT Solutions for{" "}
              <span className="techori-gradient-text">Future-Ready</span>{" "}
              Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              TECHORI delivers cutting-edge web & app development, public Wi-Fi solutions, and robotics
              innovation to transform your digital presence.
            </p>
            <p className="text-xl mb-8 font-semibold text-gray-300">
              INNOVATION IS OUR PASSION
            </p>
<p className="text-xl mb-8 font-semibold text-gray-300">
              Our services start from ₹25,000 and go up to ₹2,00,000, depending on the plan, features, and project requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-techori-orange to-techori-red hover:brightness-110 text-white px-8">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-black hover:bg-white hover:bg-techori-dark px-8">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-slide-up">
            <div className="relative">
              <div className="w-full mr-20 h-80  bg-gradient-to-br from-techori-orange/20 to-techori-red/20 rounded-lg flex items-center justify-center relative">
                <div className="flex items-center">
                  <div className="w-24 h-24 md:h-32 mr-12 ml-12">
                    <TechoriAnimation />
                  </div>

                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-techori-orange/30 rounded-full -mt-10 -mr-10 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-techori-red/30 rounded-full -mb-10 -ml-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
