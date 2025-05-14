// types.ts

// Type definition for accessory items
/**
 * @typedef {Object} Accessory
 * @property {number} id
 * @property {string} name
 * @property {string} style
 * @property {string} size
 */
  
  // Type for the categories (house or land)
  /**
   * @typedef {"house" | "land"} Category
   */
  
  // Available styles for accessories
  export const styles = [
    "Rustic", "Luxury", "Contemporary", "Industrial", "Traditional", 
    "Abstract", "Bohemian", "Vintage", "Modern", "Decorative", 
    "Functional", "Recreational", "Colorful", "Natural", "Serene", 
    "Playful", "Minimalist", "Victorian", "Eclectic", "Art Deco", 
    "Scandinavian", "Mediterranean", "Farmhouse", "Cottage", 
    "Mid-Century Modern", "Coastal", "Japanese Zen", "Tropical", 
    "Southwestern", "Gothic", "StyleNotSpecified"
  ];
  
  // Available sizes for accessories
  export const sizes = [
    "Small", "Medium", "Large", "Extra Large", "Compact", "Oversized",
    "Standard", "Mini", "Maxi", "Petite", "Tall", "Short", "Wide", 
    "Narrow", "Slim", "Spacious", "Cozy", "Roomy", "Generous", "Ample", 
    "Vast", "Expansive", "Breezy", "Open", "SizeNotSpecified"
  ];

  // Available blueprints
  export const blueprints = [
  {
    id: "1",
    name: "Studio Apartment (300 - 500 sq ft)",
    description: "Compact and efficient design ideal for singles or couples.",
    style: "Minimalist",
    size: "Small",
    priceRange: "$50,000 - $80,000",
    bedrooms: 0,
    garageSize: "No Garage"
  },
  {
    id: "2",
    name: "Tiny Home (400 - 600 sq ft)",
    description: "Minimalistic living with everything you need in a small space.",
    style: "Bohemian",
    size: "Compact",
    priceRange: "$60,000 - $90,000",
    bedrooms: 1,
    garageSize: "No Garage"
  },
  {
    id: "3",
    name: "One-Bedroom Apartment (500 - 800 sq ft)",
    description: "Cozy and functional design for individuals or small families.",
    style: "Modern",
    size: "Medium",
    priceRange: "$70,000 - $110,000",
    bedrooms: 1,
    garageSize: "1-Car Garage"
  },
  {
    id: "4",
    name: "Two-Bedroom Apartment (700 - 1,000 sq ft)",
    description: "Spacious apartment perfect for a couple or small family.",
    style: "Contemporary",
    size: "Medium",
    priceRange: "$100,000 - $150,000",
    bedrooms: 2,
    garageSize: "1-Car Garage"
  },
  {
    id: "5",
    name: "Cottage (800 - 1,200 sq ft)",
    description: "A charming, cozy design ideal for small families or vacation homes.",
    style: "Cottage",
    size: "Cozy",
    priceRange: "$120,000 - $180,000",
    bedrooms: 2,
    garageSize: "1-Car Garage"
  },
  {
    id: "6",
    name: "Small House (1,000 - 1,500 sq ft)",
    description: "Compact house with an efficient layout for everyday living.",
    style: "Functional",
    size: "Standard",
    priceRange: "$150,000 - $200,000",
    bedrooms: 2,
    garageSize: "2-Car Garage"
  },
  {
    id: "7",
    name: "Small Bungalow (1,000 - 1,400 sq ft)",
    description: "A single-story home offering simplicity and ease of movement.",
    style: "Breezy",
    size: "Spacious",
    priceRange: "$160,000 - $210,000",
    bedrooms: 2,
    garageSize: "1-Car Garage"
  },
  {
    id: "8",
    name: "Townhouse (1,200 - 1,800 sq ft)",
    description: "Multi-level design perfect for urban living with multiple bedrooms.",
    style: "Urban",
    size: "Roomy",
    priceRange: "$180,000 - $250,000",
    bedrooms: 3,
    garageSize: "2-Car Garage"
  },
  {
    id: "9",
    name: "Medium-Sized House (1,500 - 2,000 sq ft)",
    description: "A spacious home with room for a growing family.",
    style: "Traditional",
    size: "Medium",
    priceRange: "$200,000 - $270,000",
    bedrooms: 3,
    garageSize: "2-Car Garage"
  },
  {
    id: "10",
    name: "Split-Level Home (1,600 - 2,200 sq ft)",
    description: "Multiple levels with distinct living areas for privacy and comfort.",
    style: "Split-Level",
    size: "Generous",
    priceRange: "$220,000 - $300,000",
    bedrooms: 3,
    garageSize: "2-Car Garage"
  },
  {
    id: "11",
    name: "Duplex (2,000 - 2,400 sq ft)",
    description: "Two separate living units under one roof, perfect for extended families.",
    style: "Industrial",
    size: "Large",
    priceRange: "$240,000 - $320,000",
    bedrooms: 4,
    garageSize: "2-Car Garage"
  },
  {
    id: "12",
    name: "Ranch House (2,000 - 2,500 sq ft)",
    description: "Single-story layout with open spaces and easy access.",
    style: "Farmhouse",
    size: "Expansive",
    priceRange: "$250,000 - $330,000",
    bedrooms: 3,
    garageSize: "2-Car Garage"
  },
  {
    id: "13",
    name: "Two-Story Home (2,000 - 2,800 sq ft)",
    description: "Traditional design with two levels and ample space for larger families.",
    style: "Colonial",
    size: "Large",
    priceRange: "$260,000 - $350,000",
    bedrooms: 4,
    garageSize: "2-Car Garage"
  },
  {
    id: "14",
    name: "Colonial Home (2,500 - 3,500 sq ft)",
    description: "Classic, symmetrical design with spacious rooms and a grand entrance.",
    style: "Victorian",
    size: "Vast",
    priceRange: "$300,000 - $400,000",
    bedrooms: 4,
    garageSize: "2-Car Garage"
  },
  {
    id: "15",
    name: "Craftsman Home (2,400 - 3,000 sq ft)",
    description: "A home featuring handcrafted details, open spaces, and natural materials.",
    style: "Craftsman",
    size: "Ample",
    priceRange: "$280,000 - $370,000",
    bedrooms: 3,
    garageSize: "2-Car Garage"
  },
  {
    id: "16",
    name: "Cape Cod (2,500 - 3,000 sq ft)",
    description: "Coastal-inspired design with steep rooflines and a welcoming vibe.",
    style: "Coastal",
    size: "Spacious",
    priceRange: "$290,000 - $380,000",
    bedrooms: 4,
    garageSize: "2-Car Garage"
  },
  {
    id: "17",
    name: "Large House (3,000 - 4,000 sq ft)",
    description: "Spacious and luxurious, designed for large families or entertaining.",
    style: "Luxury",
    size: "Vast",
    priceRange: "$350,000 - $500,000",
    bedrooms: 5,
    garageSize: "3-Car Garage"
  },
  {
    id: "18",
    name: "Mansion (4,000 - 5,000 sq ft)",
    description: "A grand and lavish home, offering expansive living spaces and high-end finishes.",
    style: "Art Deco",
    size: "Oversized",
    priceRange: "$500,000 - $700,000",
    bedrooms: 6,
    garageSize: "3-Car Garage"
  },
  {
    id: "19",
    name: "Luxury Home (5,000 - 7,000 sq ft)",
    description: "Premium design with top-of-the-line finishes and sprawling layouts.",
    style: "Mediterranean",
    size: "Extra Large",
    priceRange: "$600,000 - $900,000",
    bedrooms: 6,
    garageSize: "3-Car Garage"
  },
  {
    id: "20",
    name: "Estate Home (7,000 - 10,000+ sq ft)",
    description: "A grand estate with expansive grounds and exceptional luxury.",
    style: "Estate",
    size: "Expansive",
    priceRange: "$800,000 - $1,200,000+",
    bedrooms: 7,
    garageSize: "4-Car Garage"
  }
];


  