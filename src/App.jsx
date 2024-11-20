import React, { useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
 // Import your CSS styles

const App = () => {
  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });

    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
    });

    scroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.addEventListener("refresh", () => scroll.update());
    ScrollTrigger.refresh();

    // GSAP Animations
    gsap.from("#navbar", {
      y: -50,
      duration: 1,
      opacity: 0,
    });

    gsap.from("#hero h1", {
      duration: 2,
      opacity: 0,
    });

    gsap.from("#hero p", {
      y: -100,
      duration: 1,
      opacity: 0,
    });

    gsap.from("#cards #card", {
      opacity: 0,
      delay: 0.3,
      duration: 2,
      y: 50,
      scrollTrigger: {
        trigger: "#page2",
        start: "top 80%",
      },
    });

    gsap.from("#page3cards #card", {
      opacity: 0,
      delay: 0.3,
      duration: 2,
      y: 50,
      scrollTrigger: {
        trigger: "#page3",
        start: "top 80%",
      },
    });

    return () => {
      scroll.destroy();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <div id="main">
      {/* Navbar */}
      <div id="navbar">
        <div id="navleft">
          <a href="#">
            <img id="logo" src="/assets/gfg-student-chapter-logo.png" alt="Logo" width="70" />
          </a>
        </div>
        <div id="navright">
          <a href="#">HOME</a>
          <a href="#">EVENTS</a>
          <a href="#">CONTACT</a>
          <a href="#">KNOW MORE</a>
        </div>
      </div>

      {/* Hero Section */}
      <div id="hero">
        <div id="left">
          <h1>AIM OF GFG STUDENT CHAPTER GGV:</h1>
          <p>
            The aim of the Geeks for Geeks (GFG) Student Chapter is to foster a community of tech
            enthusiasts within educational institutions, providing a platform for students to enhance their
            technical knowledge, coding skills, and professional development. It encourages collaboration,
            peer learning, and participation in various workshops, hackathons, and coding contests. The
            chapter aims to bridge the gap between theoretical knowledge and practical application by
            offering resources and mentorship opportunities, thereby preparing students for the challenges
            of the tech industry. Through its initiatives, the GFG Student Chapter strives to cultivate
            innovation, problem-solving abilities, and a passion for technology among its members.
          </p>
        </div>
        <div id="right">
          <video autoplay loop muted src="/assets/gfg-video.mp4" width="750px" height="500px"></video>
        </div>
      </div>

      {/* Core Team Section */}
      <div id="page2">
        <h2>OUR CORE TEAM</h2>
        <div id="cards">
          {[
            { name: "Anshuman Mishra", work: "Chairperson", img: "/avatar.jpeg" },
            { name: "Aditya Raj", work: "Vice Chairperson", img: "/assets/aditya.jpg" },
            { name: "Piyush Keshari", work: "Event Head", img: "/assets/piyush.png" },
            { name: "Anuj Vishwakarma", work: "Technical Head", img: "/assets/anuj.jpg" },
            { name: "Sakshi Aggrawal", work: "Content Head", img: "/assets/sakshi.png" },
            { name: "Sameer", work: "GD/Branding Head", img: "/avatar.jpeg" },
          ].map((member, index) => (
            <div id="card" key={index}>
              <div id="bg"></div>
              <img src={member.img} alt={member.name} />
              <div id="text">
                <span className="name">{member.name}</span>
                <br />
                <span className="work">{member.work}</span>
              </div>
              <div id="socials">
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Teams Section */}
      <div id="page3">
        <h2>OUR TECHNICAL TEAMS</h2>
        <div id="page3cards">
          {[
            { name: "Web Dev", img: "/assets/webdev.jpg" },
            { name: "AI/ML", img: "/assets/ai_ml.jpg" },
            { name: "App Dev", img: "/assets/appdev.jpg" },
            { name: "CP DSA", img: "/assets/cp_dsa.jpg" },
            { name: "Game Dev", img: "/assets/gamedev.jpg" },
            { name: "IoT", img: "/assets/iot.jpg" },
            { name: "Cyber Security", img: "/assets/cyber.jpg" },
          ].map((team, index) => (
            <div id="card" key={index}>
              <div id="bg"></div>
              <img src={team.img} alt={team.name} />
              <div id="text">
                <span className="name">{team.name}</span>
                <br />
                <span className="work">Team</span>
              </div>
              <button>Meet the team</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
