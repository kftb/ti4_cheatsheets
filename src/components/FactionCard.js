import React from 'react';
import { useFormContext } from 'react-hook-form';

function FactionCard({ faction }) {
  const { register } = useFormContext();

  const { factionName, subtitle, id } = faction;
  return (
    <div>
      <li>
        <input
          {...register(`factions.${id}`)}
          type="checkbox"
          id={`${id}-option`}
          value=""
          className="hidden peer"
          required=""
        />
        <label
          htmlFor={`${id}-option`}
          className="inline-flex justify-between items-center px-3 py-2 w-full 
            rounded-lg border-2  cursor-pointer 
            text-gray-400 bg-gray-800 border-gray-700  grayscale
            hover:bg-gray-700 hover:text-gray-200 hover:grayscale-0
             peer-checked:border-blue-600 peer-checked:text-gray-300 peer-checked:grayscale-0
             transition ease-in-out duration-400
            "
        >
          <div className="flex flex-1 items-center justify-between ">
            <div>
              <div className="w-full text-lg font-semibold">{factionName}</div>
              <div className="w-full text-sm">{subtitle}</div>
            </div>
          </div>
          <img
            className="object-cover ml-4 rounded-full h-20"
            src={`/factions/portraits/${id}.png`}
            alt={`${factionName}`}
          />
        </label>
      </li>
    </div>
  );
}

export default FactionCard;
