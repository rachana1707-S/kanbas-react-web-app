// src/Labs/Lab3/FindIndex.tsx
import React from 'react';

const FindIndex = () => {
  let numberArray1 = [1, 2, 4, 5, 6];
  let stringArray1 = ['string1', 'string3'];

  const fourIndex = numberArray1.findIndex(a => a === 4); // should return 2
  const string3Index = stringArray1.findIndex(a => a === 'string3'); // should return 1

  return (
    <div id="wd-find-index">
      <h4>Find Index Function</h4>
      <p>fourIndex = {fourIndex}</p>
      <p>string3Index = {string3Index}</p>
    </div>
  );
};

export default FindIndex;
