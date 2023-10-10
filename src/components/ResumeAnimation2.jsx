// ResumeAnimation.js

import React from 'react';

export default function ResumeAnimation2 () {
  function changeText() {
    var clickMe = document.getElementById('clickMe');
    clickMe.innerHTML = 'Thank You';
    clickMe.classList.add('fadeOut');

    setTimeout(function () {
      clickMe.style.display = 'none';
    }, 1000);
  }

  return (
    <div id="clickMe" onClick={changeText}>
      Click Me!
    </div>
  );
};

