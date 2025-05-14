// Homepage.js
import React from "react";
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <div>
      <div className="top-bg"></div>
      <h1 className="content-color">
        Welcome to the 🏡 Dream Home Builder experience — where your vision for the perfect home begins.
      </h1>
      <div className="homepage-instructions content-color">
        <p>Use the links above to explore the different features of the app:</p>
        <ul>
          <li>
            <strong>🏠 House Accessories:</strong> View and manage a list of house accessories. You can <em>add</em>, <em>edit</em>, or <em>delete</em> items using the form provided.
          </li>
          <li>
            <strong>🌿 Land Accessories:</strong> Browse outdoor and landscaping items. Just like house accessories, you can <em>add</em>, <em>edit</em>, or <em>remove</em> entries easily.
          </li>
          <li>
            <strong>📐 Blueprints:</strong> Discover a collection of home blueprints. Click on any blueprint to see a detailed view with more information.
          </li>
          <li>
            <strong>🌀 Parallax:</strong> Scroll through the beachfront properties to see how your Dream Home can look!
          </li>
        </ul>
        <p>
          You can return to this homepage at any time by clicking the <strong>🏡 Home</strong> link in the navigation menu.
        </p>
      </div>
      <div className="bottom-bg"></div>
    </div>
  );
};

export default Homepage;
