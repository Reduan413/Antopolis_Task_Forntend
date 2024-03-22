import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddCategoryModal from "@/components/AddCategoryModal";
import AddAnimalModal from "@/components/AddAnimalModal";

export default function Home() {
  const [cats, setCats] = useState([]);
  const [newCat, setNewCat] = useState(null);
  const [newAnimal, setNewAnimal] = useState(null);
  const [catID, setCatID] = useState(null);
  const [animals, setAnimals] = useState([]);
  const [categoryShow, setCategoryShow] = useState(false);
  const [animalShow, setAnimalShow] = useState(false);

  const handleCategoryClose = () => setCategoryShow(false);
  const handleCategoryShow = () => setCategoryShow(true);
  const handleAnimalClose = () => setAnimalShow(false);
  const handleAnimalShow = () => setAnimalShow(true);

  useEffect(() => {
    fetchCats();
    fetchAnimals();
  }, []); // Empty dependency array to ensure useEffect runs only once when component mounts

  const fetchCats = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/animal/categories"
      );
      setCats(response.data?.catagories || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchAnimals = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/animals");
      setAnimals(response.data?.animals || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchAnimalCategoryWise = async (catID) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/animals/${catID}`
      );
      setAnimals(response.data?.animals || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addCat = async (event) => {
    console.log(newCat);
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/animal/categories",
        {
          category_name: newCat,
        }
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addAnimal = async (event) => {
    console.log(newCat);
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/animal/categories",
        {
          category_name: newCat,
        }
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (catID) {
      fetchAnimalCategoryWise(catID);
    }
  }, [catID]);

  return (
    <div className="container">
      <Head>
        <title>Next.js App</title>
      </Head>

      <main style={{ height: "500px", backgroundColor: "gray" }}>
        <div style={{ display: "flex" }}>
          {cats.length > 0 && (
            <ul>
              {cats?.map((category, index) => (
                <button
                  style={{ margin: 5 }}
                  key={index}
                  onClick={() => setCatID(category?._id)}
                >
                  {category.category_name}
                </button>
              ))}
            </ul>
          )}
          <div style={{ padding: 10 }}>
            <Button variant="primary" onClick={handleCategoryShow}>
              Add Category
            </Button>
            <Button variant="primary" onClick={handleAnimalShow}>
              Add Animal
            </Button>
          </div>
        </div>
        <div>
          {animals.length > 0 && (
            <ul>
              {animals.map((animal, index) => (
                <>
                  <span
                    key={index}
                    style={{
                      width: "160px",
                      height: "191px",
                      backgroundColor: "black",
                      display: "inline-block", // Ensuring each span appears on a new line
                      margin: "5px", // Adding margin between each span
                      color: "white", // Setting text color to white for better visibility
                    }}
                  >
                    <img
                      src={`http://localhost:3001/${animal.animal_image}`}
                      alt={animal.animal_name}
                      style={{
                        width: "100px",
                        height: "100px",
                        marginRight: "10px",
                      }}
                      width={500}
                      height={500}
                    />
                    {animal.animal_name}
                  </span>
                </>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h3>Add Category</h3>
          <form onSubmit={addCat}>
            <input
              placeholder="Name"
              onChange={(e) => setNewCat(e.target.value)}
            />
            <button type="submit">Save</button>
          </form>
        </div>

        <div>
          <h3>Add Animal</h3>
          <form onSubmit={addAnimal}>
            <select id="catSelect">
              <option value="">Select a Category</option>
              {cats.map((category, index) => (
                <option key={index} value={category?._id}>
                  {category.category_name}
                </option>
              ))}
            </select>
            <input
              placeholder="Name"
              onChange={(e) => setNewCat(e.target.value)}
            />
            <input
              placeholder="Name"
              type="file"
              onChange={(e) => setNewCat(e.target.value)}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </main>
      <AddCategoryModal show={categoryShow} handleClose={handleCategoryClose} />
      <AddAnimalModal show={animalShow} handleClose={handleAnimalClose} />
    </div>
  );
}
