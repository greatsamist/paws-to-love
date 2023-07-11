import React, { useEffect, useState } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import Form from "./Form";

const ANIMALS = ["dog", "cat", "bird", "rabbit"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <Form
        requestPets={requestPets}
        location={location}
        setLocation={setLocation}
        animal={animal}
        setAnimal={setAnimal}
        breed={breed}
        setBreed={setBreed}
        ANIMALS={ANIMALS}
        breeds={breeds}
      />

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
