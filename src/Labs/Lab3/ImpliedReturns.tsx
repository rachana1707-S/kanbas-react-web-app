import React from 'react';

// Function to multiply two numbers
const multiply = (a: number, b: number) => a * b;

const ImpliedReturns = () => {
  const fourTimesFive = multiply(4, 5);
  console.log(fourTimesFive);

  return (
    <div id="wd-implied-return">
      <h4>Implied Return</h4>
      fourTimesFive = {fourTimesFive}<br />
      multiply(4, 5) = {multiply(4, 5)} <hr />
    </div>
  );
};

export default ImpliedReturns;
