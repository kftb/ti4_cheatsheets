import React from 'react';
import { SwitchOption } from './SwitchOption';

function HomepageSettings() {
  const SwitchOptionContainer = ({ children, title }) => (
    <div
      className="flex items-center px-3 py-2  
rounded-lg border-2  cursor-pointer
text-gray-400 bg-gray-800 border-gray-700 grayscale"
    >
      <div className="flex flex-wrap gap-5 px-4 w-full content-center items-center">
        <div className="text-lg font-semibold">{title}</div>
        {children}
      </div>
    </div>
  );
  return (
    <>
      <div className="flex flex-wrap max-w gap-5">
        <SwitchOptionContainer title="Settings">
          <SwitchOption id="letter" labelLeft="A4" labelRight="Letter" />
          <SwitchOption
            id="pagePerPlayer"
            labelRight="Add a copy per player"
            highlightSelection={true}
          />
        </SwitchOptionContainer>
        <SwitchOptionContainer title="Content">
          <SwitchOption id="sc" labelRight="Add Strategy Card page" highlightSelection={true} />
          {/* <SwitchOption id="tech" labelRight="Add Tech page" highlightSelection={true} />
          <SwitchOption id="objective" labelRight="Add Objectives page" highlightSelection={true} /> */}
        </SwitchOptionContainer>
      </div>
    </>
  );
}

export default HomepageSettings;
