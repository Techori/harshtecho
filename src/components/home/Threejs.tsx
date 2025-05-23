import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const TechoriAnimation = () => {
  const animationFrameId = useRef(null);
  const lettersRef = useRef([]);
  const sloganRef = useRef([]);
  const techoriDone = useRef(false);
  const sloganDone = useRef(false);

  const tlettersize = window.innerWidth < 768 ? '7xl' : '64';
  const echorisize = window.innerWidth < 768 ? '6xl' : '7xl';
  const sloganSize = window.innerWidth < 768 ? 'xs' : '32';

  useEffect(() => {
    // Particle System Setup
    let particleScene, particleCamera, particleRenderer, particleSystem, positions, velocities;
    const particleCanvas = document.getElementById("particle-canvas");

    if (particleCanvas) {
      particleScene = new THREE.Scene();
      particleCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      particleRenderer = new THREE.WebGLRenderer({ alpha: true, canvas: particleCanvas });
      particleRenderer.setSize(window.innerWidth, window.innerHeight);

      const particles = new THREE.BufferGeometry();
      const particleCount = 2000;
      positions = new Float32Array(particleCount * 2);
      velocities = new Float32Array(particleCount * 5);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 1000;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 1000;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 1000;
        velocities[i * 3] = (Math.random() - 0.5) * 0.5;
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
      }

      particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const particleMaterial = new THREE.PointsMaterial({
        color: 0xff4500,
        size: 2,
        transparent: true,
        opacity: 0.6,
      });

      particleSystem = new THREE.Points(particles, particleMaterial);
      particleScene.add(particleSystem);

      particleCamera.position.z = 500;
    }

    // Text Falling Animation for "techori"
    const animateLetters = () => {
      let allAtFinalPos = true;
      lettersRef.current.forEach((letter, index) => {
        if (!letter) return;
        const style = letter.style;
        let top = parseFloat(style.top) || -600;
        let velocity = parseFloat(style.getPropertyValue('--velocity')) || 0;
        const gravity = 0.02;
        const bounce = -0.009;
        const finalPos = window.innerWidth < 768 ? window.innerHeight / 2 - 360 : window.innerHeight / 2 - 390;

        if (top < finalPos) {
          velocity += gravity;
          top += velocity;
          allAtFinalPos = false;
        } else {
          top = finalPos;
          if (velocity > 0) {
            velocity *= bounce;
          }
        }

        style.top = `${top}px`;
        style.setProperty('--velocity', velocity);
      });

      if (allAtFinalPos) {
        techoriDone.current = true;
      }
    };

    // Slogan Sliding Animation
    const animateSlogan = () => {
      if (!techoriDone.current || sloganDone.current) return;
      let allAtFinalPos = true;
      sloganRef.current.forEach((letter, index) => {
        if (!letter) return;
        const style = letter.style;
        let left = parseFloat(style.left) || window.innerWidth;
        let velocity = parseFloat(style.getPropertyValue('--velocity')) || -4; // Increased speed from -2 to -4
        const finalPosHorizontal = window.innerWidth < 768 ? 37 : 25; // Align with left edge of "t"
        const finalPosVertical = window.innerWidth < 768 ? window.innerHeight / 2 - 400 : window.innerHeight / 2 - 428;

        if (left > finalPosHorizontal) {
          left += velocity;
          allAtFinalPos = false;
        } else {
          left = finalPosHorizontal;
          velocity = 0;
        }

        style.top = `${finalPosVertical}px`;
        style.left = `${left}px`;
        style.setProperty('--velocity', velocity);
      });

      if (allAtFinalPos) {
        sloganDone.current = true;
      }
    };

    // Animation Loop
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);

      // Animate Particles
      if (particleCanvas && particleSystem) {
        for (let i = 0; i < 1000; i++) {
          positions[i * 3] += velocities[i * 3];
          positions[i * 3 + 1] += velocities[i * 3 + 1];
          positions[i * 3 + 2] += velocities[i * 3 + 2];

          if (Math.abs(positions[i * 3]) > 500) velocities[i * 3] *= -1;
          if (Math.abs(positions[i * 3 + 1]) > 500) velocities[i * 3 + 1] *= -1;
          if (Math.abs(positions[i * 3 + 2]) > 500) velocities[i * 3 + 2] *= -1;
        }

        particleSystem.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        particleRenderer.render(particleScene, particleCamera);
      }

      // Animate Letters and Slogan
      animateLetters();
      animateSlogan();
    };

    animate();

    // Handle Window Resize
    const handleResize = () => {
      if (particleCanvas) {
        particleCamera.aspect = window.innerWidth / window.innerHeight;
        particleCamera.updateProjectionMatrix();
        particleRenderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener("resize", handleResize);
      if (particleCanvas && particleRenderer) {
        particleRenderer.dispose();
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas id="particle-canvas" className="absolute top-0 left-0 w-full h-full" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-9xl md:text-9xl font-bold flex items-center justify-center space-x-1">
          {"techori".split("").map((char, index) => (
            <span
              key={index}
              ref={(el) => (lettersRef.current[index] = el)}
              className={`inline-block transition-all duration-200 ease-out hover:scale-125 hover:${
                Math.random() > 0.5 ? "translate-y-[-15px]" : "translate-y-[15px]"
              } hover:rotate-6 ${index === 0 ? `text-orange-600 text-${tlettersize}` : `text-white text-${echorisize} md:text-7xl`}`}
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                position: "relative",
                top: "-600px",
                "--velocity": "0",
              }}
            >
              {char}
            </span>
          ))}
        </h1>
        <h2 className="text-xs md:text-xs flex items-center justify-center space-x-0.5">
          {"INNOVATION IS OUR PASSION".split("").map((char, index) => (
            <span
              key={index}
              ref={(el) => (sloganRef.current[index] = el)}
              className={`inline-block transition-all duration-200 ease-out hover:scale-150 text-${sloganSize} md:text-xs text-white`}
              style={{
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                position: "relative",
                left: `${window.innerWidth}px`, // Start from right edge
                "--velocity": "-4", // Increased speed from -2 to -4
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
};

export default TechoriAnimation;