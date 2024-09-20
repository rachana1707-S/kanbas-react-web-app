// src/LandingPage/LandingPage.tsx
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Rachana Sudhakar</h1>
      <h2>Section: 02 || CRN: 20595 || NUID: 002320341</h2>

      {/* Lab Links */}
      <section>
        <h3>Lab Assignments</h3>
        <ul>
          <li><a href="http://localhost:3000/#/Labs/Lab1">Lab 1</a></li>
          <li><a href="http://localhost:3000/#/Labs/Lab2">Lab 2</a></li>
          <li><a href="http://localhost:3000/#/Labs/Lab3">Lab 3</a></li>
        </ul>
      </section>

      {/* Kanbas App Link */}
      <section>
        <h3>Kanbas Application</h3>
        <a href="http://localhost:3000/#/Kanbas/Account/Signin">Visit Kanbas</a>
      </section>

      <section>
  <h3>GitHub Repository</h3>
  <a id="wd-github" href="https://github.com/yourusername/kanbas-react-web-app" target="_blank" rel="noopener noreferrer">
    Kanbas React Web App Repository
  </a>
</section>

    </div>
  );
};

export default LandingPage;
