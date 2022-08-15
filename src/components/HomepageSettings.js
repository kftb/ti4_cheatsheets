import React from 'react';
import { useFormContext } from 'react-hook-form';

function HomepageSettings() {
  const { register } = useFormContext();
  return (
    <div
      className="inline-flex justify-between items-center px-3 py-2 w-full 
    rounded-lg border-2  cursor-pointer 
    text-gray-400 bg-gray-800 border-gray-700  grayscale
    "
    >
      <div>
        <div className="w-full text-lg font-semibold mb-5">Settings</div>
        <div className="grid gap-3 w-full md:grid-cols-4">
          <div>
            <div className="flex">
              <span className="mr-3 text-sm font-medium text-gray-300">A4</span>
              <label
                htmlFor="default-toggle"
                className="inline-flex relative items-center mb-4 cursor-pointer"
              >
                <input
                  {...register(`settings.letter`)}
                  type="checkbox"
                  value=""
                  id="default-toggle"
                  className="sr-only peer"
                />
                <div
                  className="w-11 h-6 bg-gray-700 rounded-full 
          peer peer-focus:ring-blue-800 peer-checked:after:translate-x-full
           peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px]
           after:border-gray-300 
           after:border after:rounded-full after:h-5 after:w-5 
           after:transition-all border-gray-600 peer-checked:bg-gray-700"
                ></div>
              </label>
              <span className="ml-3 text-sm font-medium text-gray-300">Letter</span>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default HomepageSettings;
