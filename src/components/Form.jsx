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
        <input id="location" name="location" placeholder="Location" />
      </label>
      <label htmlFor="animal">
        Animal
        <select
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
        <select id="breed" name="breed" disabled={breeds.length === 0}>
          <option />
          {breeds.map((breed) => (
            <option key={breed.id}>{breed}</option>
          ))}
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
};

export default Form;
