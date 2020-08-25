import React from 'react';

export const Footer = () => {
  let date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <p>Copyright © {year}</p>
    </footer>
  );
};
