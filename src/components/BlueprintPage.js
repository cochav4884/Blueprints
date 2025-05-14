import React from "react";
import { Card, Row, Col, Container, Spinner } from "react-bootstrap";
import { blueprints } from "../types"; // Assuming your blueprints are exported from types.js
import { Link } from "react-router-dom";
import "../styles/Blueprintpage.css";

// Importing all 20 blueprint images from the assets folder
import StudioApartment from "../assets/StudioApartmentBluePrint.jpg";
import TinyHome from "../assets/TinyHomeBluePrint.jpg";
import OneBedroomApartment from "../assets/One-BedroomApartmentBluePrint.jpg";
import TwoBedroomApartment from "../assets/Two-BedroomApartmentBluePrint.jpg";
import Cottage from "../assets/CottageBluePrint.jpg";
import SmallHouse from "../assets/SmallHouseBluePrint.jpg";
import SmallBungalow from "../assets/SmallBungalowBluePrint.jpg";
import Townhouse from "../assets/TownhouseBluePrint.jpg";
import MediumSizedHouse from "../assets/Medium-SizedHouseBluePrint.jpg";
import SplitLevelHome from "../assets/Split-LevelHomeBluePrint.jpg";
import Duplex from "../assets/DuplexBluePrint.jpg";
import RanchHouse from "../assets/RanchHouseBluePrint.jpg";
import TwoStoryHome from "../assets/Two-StoryHomeBluePrint.jpg";
import ColonialHome from "../assets/ColonialHomeBluePrint.jpg";
import CraftsmanHome from "../assets/CraftsmanHomeBluePrint.jpg";
import CapeCod from "../assets/CapeCodBluePrint.jpg";
import LargeHouse from "../assets/LargeHouseBluePrint.jpg";
import Mansion from "../assets/MansionBluePrint.jpg";
import LuxuryHome from "../assets/LuxuryHomeBluePrint.jpg";
import EstateHome from "../assets/EstateHomeBluePrint.jpg";

// Mapping blueprint IDs to image imports
const imageMapping = {
  1: StudioApartment,
  2: TinyHome,
  3: OneBedroomApartment,
  4: TwoBedroomApartment,
  5: Cottage,
  6: SmallHouse,
  7: SmallBungalow,
  8: Townhouse,
  9: MediumSizedHouse,
  10: SplitLevelHome,
  11: Duplex,
  12: RanchHouse,
  13: TwoStoryHome,
  14: ColonialHome,
  15: CraftsmanHome,
  16: CapeCod,
  17: LargeHouse,
  18: Mansion,
  19: LuxuryHome,
  20: EstateHome,
};

const BlueprintsPage = ({ isLoading }) => {
  return (
    
    <Container>
      <div className="top-bg"></div>
         <h1 className="content-color my-4"> 📐 Blueprints Gallery</h1>
      <div className="bottom-bg"></div>
     
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Row>
          {blueprints.map((blueprint) => (
            <Col key={blueprint.id} md={4} className="mb-4">
              <Card>
                {/* Wrap the image in Link to navigate to the detail page */}
                <Link to={`/blueprint/${blueprint.id}`}>
                  <Card.Img
                    variant="top"
                    src={imageMapping[blueprint.id]} // Dynamically using imageMapping to get the correct image
                    alt={blueprint.name}
                  />
                </Link>
                <Card.Body>
                  <Card.Title>{blueprint.name}</Card.Title>
                  <Card.Text>{blueprint.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default BlueprintsPage;