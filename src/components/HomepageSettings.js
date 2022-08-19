import React from 'react';
import { SwitchOption } from './SwitchOption';

function HomepageSettings() {
  return (
    <div>
      <div className="flex max-w-">
        <div
          className=" items-center px-3 py-2 w-full 
    rounded-lg border-2  cursor-pointer
    text-gray-400 bg-gray-800 border-gray-700  grayscale
    "
        >
          <div className="w-full text-lg font-semibold mb-2">Settings</div>
          <div className="grid gap-3 w-full md:grid-cols-4">
            <SwitchOption id="letter" labelLeft="A4" labelRight="Letter" />
            <SwitchOption
              id="pagePerPlayer"
              labelRight="Add a copy per player"
              highlightSelection={true}
            />
          </div>
        </div>
        <div
          className="justify-between items-center px-3 py-2 w-full 
    rounded-lg border-2  cursor-pointer 
    text-gray-400 bg-gray-800 border-gray-700  grayscale
    "
        >
          <div className="w-full text-lg font-semibold mb-2">Content</div>
          <div className="grid gap-3 w-full md:grid-cols-4"></div>
          <div className="grid grid-cols-2">
            <SwitchOption id="sc" labelRight="Add Strategy Card page" highlightSelection={true} />
            <SwitchOption
              id="test"
              labelLeft="test"
              labelRight="I am a test label"
              highlightSelection={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomepageSettings;
