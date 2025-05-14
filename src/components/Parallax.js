import React from "react";
import "../styles/Parallax.css";
import { Container } from "react-bootstrap";

const sections = [
  {
    img: "BeachStudioApartment.jpg",
    title: "Studio Apartment",
    desc: "Compact and efficient design ideal for singles or couples.",
  },
  {
    img: "BeachTinyHome.jpg",
    title: "Tiny Home",
    desc: "Minimalistic living with everything you need in a small space.",
  },
  {
    img: "BeachOneBedroomApartment.jpg",
    title: "One Bedroom Apartment",
    desc: "Cozy and functional design for individuals or small families.",
  },
  {
    img: "BeachTwoBedroomApartment.jpg",
    title: "Two Bedroom Apartment",
    desc: "Spacious apartment perfect for a couple or small family.",
  },
  {
    img: "BeachCottage.jpg",
    title: "Cottage",
    desc: "A charming, cozy design ideal for small families or vacation homes.",
  },
  {
    img: "BeachSmallHouse.jpg",
    title: "Small House",
    desc: "Compact house with an efficient layout for everyday living.",
  },
  {
    img: "BeachSmallBungalow.jpg",
    title: "Small Bungalow",
    desc: "A single-story home offering simplicity and ease of movement.",
  },
  {
    img: "BeachTownHouse.jpg",
    title: "Town House",
    desc: "Multi-level design perfect for urban living with multiple bedrooms.",
  },
  {
    img: "BeachMediumSizedHouse.jpg",
    title: "Medium Sized House",
    desc: "A spacious home with room for a growing family.",
  },
  {
    img: "BeachSplitLevelHouse.jpg",
    title: "Split Level Home",
    desc: "Multiple levels with distinct living areas for privacy and comfort.",
  },
  {
    img: "BeachDuplex.jpg",
    title: "Duplex",
    desc: "Two separate living units under one roof, perfect for extended families.",
  },
  {
    img: "BeachRanchHouse.jpg",
    title: "Ranch House",
    desc: "Single-story layout with open spaces and easy access.",
  },
  {
    img: "BeachTwoStoryHome.jpg",
    title: "Two Story Home",
    desc: "Traditional design with two levels and ample space for larger families.",
  },
  {
    img: "BeachColonialHome.jpg",
    title: "Colonial Home",
    desc: "Classic, symmetrical design with spacious rooms and a grand entrance.",
  },
  {
    img: "BeachCraftsmanHome.jpg",
    title: "Craftsman Home",
    desc: "A home featuring handcrafted details, open spaces, and natural materials.",
  },
  {
    img: "BeachCapeCod.jpg",
    title: "Cape Cod",
    desc: "Coastal-inspired design with steep rooflines and a welcoming vibe.",
  },
  {
    img: "BeachLargeHouse.jpg",
    title: "Large House",
    desc: "Spacious and luxurious, designed for large families or entertaining.",
  },
  {
    img: "BeachMansion.jpg",
    title: "Mansion",
    desc: "A grand and lavish home, offering expansive living spaces and high-end finishes.",
  },
  {
    img: "BeachLuxury.jpg",
    title: "Luxury Home",
    desc: "Premium design with top-of-the-line finishes and sprawling layouts.",
  },
  {
    img: "BeachEstate.jpg",
    title: "Estate Home",
    desc: "A grand estate with expansive grounds and exceptional luxury.",
  },
];

const ParallaxPage = () => {
  return (
    <div>
      {/* Top full-screen parallax background */}
      <div className="parallax d-flex align-items-center justify-content-center text-center text-white">
        <Container>
          <div className="top-bg"></div>

          <div className="parallax-content container">
            <h1 className="h1">Welcome to the 🌀Parallax Experience</h1>
            <p className="h1">
              Scroll through the beachfront properties to see how your Dream
              Home can look!
            </p>
          </div>

          <div className="bottom-bg"></div>
        </Container>
      </div>

      {/* Red background sections with images and text */}
      {sections.map(({ img, title, desc }) => {
        let imageSrc;
        try {
          imageSrc = require(`../assets/${img}`);
        } catch (err) {
          console.error(`Image not found: ${img}`);
          imageSrc = ""; // fallback if image not found
        }

        return (
          <div className="scroll-helper" key={title}>
            <div className="image-container">
              <img src={imageSrc} alt={title} className="section-image" />
            </div>
            <div className="text-content">
              <h2 className="text-light">{title}</h2>
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ParallaxPage;
