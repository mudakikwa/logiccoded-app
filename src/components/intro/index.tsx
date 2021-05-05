import React, { useEffect } from 'react';
import './index.scss';

export default function Intro() {
  useEffect(() => {
    const textWrapper = document.querySelector('.ml7 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    
  });
  return (
    <div id="intro">
      <h1 className="ml7">
        <span className="text-wrapper">
          <span className="letters">Smarted Coded</span>
        </span>
      </h1>
    </div>
  );
}
