// components/Cards.js
import React from "react";

const teamMembers = [
  { name: "Anshuman Mishra", role: "Chairperson", img: "/avatar.jpeg" },
  { name: "Aditya Raj", role: "Vice Chairperson", img: "/assets/aditya.jpg" },
  { name: "Piyush Keshari", role: "Event Head", img: "/assets/piyush.png" },
  { name: "Anuj Vishwakarma", role: "Technical Head", img: "/assets/anuj.jpg" },
  { name: "Sakshi Aggrawal", role: "Content Head", img: "/assets/sakshi.png" },
  { name: "Sameer", role: "GD/Branding Head", img: "/avatar.jpeg" },
];

const Cards = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center">OUR CORE TEAM</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 text-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="font-bold mt-4">{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
