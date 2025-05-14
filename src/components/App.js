import React, { useState, useEffect, useCallback } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Routes, Route, useLocation } from "react-router-dom";
import BlueprintsPage from "./BlueprintPage";
import BlueprintDetailPage from "./BlueprintDetailPage";
import AccessoryList from "./AccessoryList";
import AccessoryForm from "./AccessoryForm";
import Header from "./Header";
import Homepage from "./Homepage";
import ParallaxPage from "./Parallax";

import "../styles/App.css";
import "../styles/Form.css";
import "../styles/Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { API_BASE, RESOURCES } from "../config";
import ErrorBoundary from "../ErrorBoundary";

const App = () => {
  const [houseList, setHouseList] = useState([]);
  const [landList, setLandList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formType, setFormType] = useState(null);
  const [activeList, setActiveList] = useState("house");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("house-accessories")) {
      setActiveList("house");
    } else if (location.pathname.includes("land-accessories")) {
      setActiveList("land");
    }
  }, [location.pathname]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const resource =
        activeList === "house" ? RESOURCES.HOUSE : RESOURCES.LAND;
      const url = `${API_BASE}/${resource}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error(`${resource} not found`);

      const data = await res.json();

      if (activeList === "house") {
        setHouseList(data);
      } else {
        setLandList(data);
      }
    } catch (err) {
      setError(err.message);
      console.error("Failed to load accessories:", err);
    } finally {
      setIsLoading(false);
    }
  }, [activeList]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSelectCategory = (category) => {
    setActiveList(category);
  };

  const addNewItem = () => {
    const newItem = { name: "", style: "", size: "" };
    setSelectedItem(newItem);
    setFormType(activeList);
    setIsFormVisible(true);
  };

  const editItem = (id) => {
    const list = activeList === "house" ? houseList : landList;
    const item = list.find((item) => item.id === id);
    if (item) {
      setSelectedItem(item);
      setFormType(activeList);
      setIsFormVisible(true);
    }
  };

  const deleteItem = async (id) => {
    const resource = activeList === "house" ? RESOURCES.HOUSE : RESOURCES.LAND;
    try {
      await fetch(`${API_BASE}/${resource}/${id}`, { method: "DELETE" });
      await fetchData();
    } catch (err) {
      console.error("Failed to delete item:", err);
    }
  };

  const saveAccessory = async (newItem) => {
    const resource = formType === "house" ? RESOURCES.HOUSE : RESOURCES.LAND;
    const list = formType === "house" ? houseList : landList;

    const isDuplicate = list.some(
      (item) => item.name === newItem.name && item.id !== newItem.id
    );
    if (isDuplicate) {
      alert("Item with that name already exists!");
      return;
    }

    const method = newItem.id ? "PUT" : "POST";
    const url = newItem.id
      ? `${API_BASE}/${resource}/${newItem.id}`
      : `${API_BASE}/${resource}`;

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });

      await res.json();

      if (newItem.id) {
        const updateList = (prevList) =>
          prevList.map((item) => (item.id === newItem.id ? newItem : item));
        formType === "house"
          ? setHouseList(updateList)
          : setLandList(updateList);
      } else {
        const addToList = (prevList) => [...prevList, newItem];
        formType === "house"
          ? setHouseList(addToList)
          : setLandList(addToList);
      }

      setIsFormVisible(false);
    } catch (err) {
      console.error("Failed to save accessory:", err);
    }
  };

  const cancelForm = () => {
    setIsFormVisible(false);
    setSelectedItem(null);
  };

  return (
    <div className="app-container">
      <Header onSelectCategory={handleSelectCategory} />
      <main className="content">
        {isLoading ? (
          <div className="spinner-container">
            <Spinner animation="border" variant="info" />
          </div>
        ) : (
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route
                path="/blueprints"
                element={<BlueprintsPage isLoading={isLoading} />}
              />
              <Route path="/blueprint/:id" element={<BlueprintDetailPage />} />
              <Route path="/parallax" element={<ParallaxPage />} />
              <Route
                path="/house-accessories"
                element={
                  <>
                    
                    <div className="top-bg"></div>
                    <h1 className="content-color">🏠 House Accessories</h1>
                    <div className="bottom-bg"></div>
                    <div className="button-container">
                      <Button variant="secondary" id="btn-color" onClick={addNewItem}>
                        Add New 🏠 House Item
                      </Button>
                    </div>
                    {error ? (
                      <p style={{ color: "red" }}>Error: {error}</p>
                    ) : (
                      <AccessoryList
                        accessories={houseList}
                        deleteItem={deleteItem}
                        editItem={editItem}
                        isLoading={isLoading}
                      />
                    )}
                  </>
                }
              />
              <Route
                path="/land-accessories"
                element={
                  <>
                    <div className="top-bg"></div>
                    <h1 className="content-color">🌿 Land Accessories</h1>
                    <div className="bottom-bg"></div>
                    <div className="button-container">
                      <Button variant="secondary" id="btn-color" onClick={addNewItem}>
                        Add New 🌿 Land Item
                      </Button>
                    </div>
                    {error ? (
                      <p style={{ color: "red" }}>Error: {error}</p>
                    ) : (
                      <AccessoryList
                        accessories={landList}
                        deleteItem={deleteItem}
                        editItem={editItem}
                        isLoading={isLoading}
                      />
                    )}
                  </>
                }
              />
            </Routes>
          </ErrorBoundary>
        )}
      </main>

      {isFormVisible && selectedItem && (
        <div className="form-overlay">
          <AccessoryForm
            accessory={selectedItem}
            onSave={saveAccessory}
            onCancel={cancelForm}
          />
        </div>
      )}
    </div>
  );
};

export default App;