import React from "react";
import { useParams } from "react-router-dom";
import { blueprints } from "../types";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../styles/Blueprintpage.css";

// Images
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

const BlueprintDetailPage = () => {
  const { id } = useParams();
  const blueprint = blueprints.find((bp) => bp.id.toString() === id);

  if (!blueprint) {
    return <div>Blueprint not found!</div>;
  }

  return (
    <Container className="my-4">
      <div className="top-bg"></div>
      <h1 className="content-color my-4"> 🛠️ Blueprint Details</h1>
      <div className="bottom-bg"></div>
      <Card className="shadow-lg">
        <Row className="g-0">
          <Col md={6} sm={12}>
            <Card.Img
              variant="top"
              src={imageMapping[blueprint.id.toString()]}
              alt={blueprint.name}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </Col>
          <Col md={6} sm={12}>
            <Card.Body>
              <Card.Title as="h1">{blueprint.name}</Card.Title>
              <Card.Text>
                <strong>Description:</strong> {blueprint.description}
              </Card.Text>
              <Card.Text>
                <strong>Style:</strong> {blueprint.style}
              </Card.Text>
              <Card.Text>
                <strong>Size:</strong> {blueprint.size}
              </Card.Text>
              <Card.Text>
                <strong>Price Range:</strong> {blueprint.priceRange}
              </Card.Text>
              <Card.Text>
                <strong>Bedrooms:</strong> {blueprint.bedrooms}
              </Card.Text>
              <Card.Text>
                <strong>Garage Size:</strong> {blueprint.garageSize}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default BlueprintDetailPage;
