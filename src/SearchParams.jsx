import React, { useState } from "react";
import useBreedList from "./useBreedList";
import Results from "./components/Results";
import Form from "./components/Form";
import fetchSearch from "./components/queries/fetchSearch";
import { useQuery } from "@tanstack/react-query";

const ANIMALS = ["dog", "cat", "bird", "rabbit"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });

  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");

  const [breeds] = useBreedList(animal);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <Form
        location={location}
        animal={animal}
        setAnimal={setAnimal}
        breed={breed}
        setBreed={setBreed}
        ANIMALS={ANIMALS}
        breeds={breeds}
        setRequestParams={setRequestParams}
      />

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
