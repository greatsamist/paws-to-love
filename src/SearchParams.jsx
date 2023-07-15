import React, { useState, useContext } from "react";
import useBreedList from "./useBreedList";
import Results from "./components/Results";
import Form from "./components/Form";
import fetchSearch from "./components/queries/fetchSearch";
import { useQuery } from "@tanstack/react-query";
import AdoptedPetContext from "./components/context/AdoptedPetContext";

const ANIMALS = ["dog", "cat", "bird", "rabbit"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });

  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  const [adoptedPet] = useContext(AdoptedPetContext);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <Form
        location={location}
        animal={animal}
        setAnimal={setAnimal}
        ANIMALS={ANIMALS}
        breeds={breeds}
        setRequestParams={setRequestParams}
        adoptedPet={adoptedPet}
      />

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
