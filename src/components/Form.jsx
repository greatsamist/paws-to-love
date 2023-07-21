import React from "react";

const Form = ({
  adoptedPet,
  animal,
  setAnimal,
  ANIMALS,
  breeds,
  setRequestParams,
}) => {
  return (
    <form
      className="mb-10 flex flex-col items-center justify-center rounded-lg bg-gray-200 p-10 shadow-lg"
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const obj = {
          animal: formData.get("animal") ?? "",
          breed: formData.get("breed") ?? "",
          location: formData.get("location") ?? "",
        };
        setRequestParams(obj);
      }}
    >
      {adoptedPet ? (
        <div className="pet image-container">
          <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
        </div>
      ) : null}
      <label htmlFor="location">
        Location
        <input
          className="search-input"
          type="text"
          id="location"
          name="location"
          placeholder="Location"
        />
      </label>
      <label htmlFor="animal">
        Animal
        <select
          className="search-input grayed-out-disabled"
          id="animal"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
          }}
        >
          <option />
          {ANIMALS.map((animal) => (
            <option key={animal}>{animal}</option>
          ))}
        </select>
      </label>

      <label htmlFor="breed">
        Breed
        <select
          className="search-input disabled:opacity-50"
          id="breed"
          name="breed"
          disabled={breeds.length === 0}
        >
          <option />
          {breeds.map((breed) => (
            <option key={breed.id}>{breed}</option>
          ))}
        </select>
      </label>
      <button className="rounded border-none bg-orange-500 px-6 py-2 text-white hover:opacity-50">
        Submit
      </button>
    </form>
  );
};

export default Form;
