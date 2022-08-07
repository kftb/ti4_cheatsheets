import React from 'react';
import { useForm } from 'react-hook-form';
import { factions } from '../assets/factions';
import { uniqueId } from 'lodash';

function Homepage() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const factionSelection = factions.map((f) => (
    <li key={uniqueId()}>
      <input name={`${f.id}`} type="checkbox" {...register(`${f.id}`)} />
      <label>{f.factionName}</label>
    </li>
  ));
  return (
    <div>
      <h1>TI4 Cheat sheet generator</h1>
      <h2>Pick the cheat sheets you want to include and the factions in your game</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ul>{factionSelection}</ul>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Homepage;
