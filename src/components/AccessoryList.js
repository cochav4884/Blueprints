import React from "react";
import { Button, ListGroup, Spinner } from "react-bootstrap";
import "../styles/AccessoryList.css"; // Ensure this file is created

const AccessoryList = ({ accessories, deleteItem, editItem, isLoading }) => {
  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner animation="border" variant="info" />
        <p>Loading accessories...</p>
      </div>
    );
  }

  // Check for duplicates
  const ids = accessories.map((a) => a.id);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicates.length > 0) {
    console.warn("Duplicate IDs detected:", duplicates);
  }

  if (!Array.isArray(accessories)) {
    return <div>Error: Failed to load accessories. Please try again later.</div>;
  }

  return (
    <ListGroup>
      {accessories.length === 0 ? (
        <ListGroup.Item>No accessories available.</ListGroup.Item>
      ) : (
        accessories.map((accessory, index) => {
          const key = accessory.id || `temp-${index}`;
          if (!accessory.id) {
            console.warn("Accessory missing ID:", accessory);
          }

          return (
            <ListGroup.Item
              key={key}
              className="d-flex justify-content-between align-items-center accessory-item"
            >
              <div>
                <strong>{accessory.name}</strong> - {accessory.style} ({accessory.size})
              </div>

              <div>
                <Button
                  id="btn-color"
                  variant="secondary"
                  onClick={() => editItem(accessory.id)}
                  disabled={!accessory.id}
                  style={{ marginLeft: "10px" }}
                >
                  Edit
                </Button>
                <Button id="danger-btn-setup"
                  variant="danger"
                  onClick={() => deleteItem(accessory.id)}
                  disabled={!accessory.id}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </Button>
              </div>
            </ListGroup.Item>
          );
        })
      )}
    </ListGroup>
  );
};

export default AccessoryList;
