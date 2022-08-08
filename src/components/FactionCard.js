import React from 'react';
import { useFormContext } from 'react-hook-form';

function FactionCard({ faction }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { factionName, subtitle, id } = faction;
  return (
    <div>
      <li>
        <input
          {...register(`${id}`)}
          type="checkbox"
          id={`${id}-option`}
          value=""
          className="hidden peer"
          required=""
        />
        <label
          htmlFor={`${id}-option`}
          className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="block">
            <div className="w-full text-lg font-semibold">{factionName}</div>
            <div className="w-full text-sm">{subtitle}</div>
          </div>
        </label>
      </li>
    </div>
  );
}

export default FactionCard;
