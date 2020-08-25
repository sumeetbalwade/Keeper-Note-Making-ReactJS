import React from 'react';

export default function Note(porp) {
  return (
    <div className="note">
      <h1>{porp.title}</h1>
      <p>{porp.content}</p>
    </div>
  );
}
