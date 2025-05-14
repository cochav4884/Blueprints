import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { styles, sizes, blueprints } from "../types"; // assuming 'blueprints' is an array with objects containing 'id', 'name', and 'description'
import "../styles/AccessoryForm.css";

const AccessoryForm = ({ accessory, onSave, onCancel }) => {
  // Initializing form data with default values if no accessory is passed (for creating new items)
  const [formData, setFormData] = useState({
    id: accessory ? accessory.id : "",
    name: accessory ? accessory.name : "",
    style: accessory ? accessory.style : "",
    size: accessory ? accessory.size : "",
    blueprint: accessory ? accessory.blueprint || "" : "", // added blueprint
  });

  // Update formData when accessory prop changes (editing)
  useEffect(() => {
    if (accessory) {
      setFormData({
        id: accessory.id,
        name: accessory.name,
        style: accessory.style,
        size: accessory.size,
        blueprint: accessory.blueprint || "",
      });
    }
  }, [accessory]);

  // Handle input changes in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      onSave(formData); // Pass the updated form data to save
    } catch (err) {
      console.error("Error while saving item:", err);
    }
  };

  return (
    <div className="bg-color">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label className="text-light">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="style">
          <Form.Label className="text-light">Style</Form.Label>
          <Form.Control
            as="select"
            name="style"
            value={formData.style}
            onChange={handleChange}
          >
            <option value="">-- Select Style --</option>
            {styles.map((style) => (
              <option key={style} value={style}>
                {style}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="size">
          <Form.Label className="text-light">Size</Form.Label>
          <Form.Control
            as="select"
            name="size"
            value={formData.size}
            onChange={handleChange}
          >
            <option value="">-- Select Size --</option>
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="blueprint">
          <Form.Label className="text-light">Blueprint</Form.Label>
          <Form.Control
            as="select"
            name="blueprint"
            value={formData.blueprint}
            onChange={handleChange}
          >
            <option value="">-- Select Blueprint --</option>
            {blueprints.map((bp) => (
              <option key={bp.id} value={bp.name}>
                {bp.name} – {bp.description}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button id="btn-color" type="submit">
          Save
        </Button>

        <Button
          variant="secondary"
          onClick={onCancel}
          style={{ marginLeft: "10px" }}
        >
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default AccessoryForm;
