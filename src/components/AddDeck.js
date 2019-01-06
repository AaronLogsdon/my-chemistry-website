import React, { Component } from 'react';

const AddDeck = () => (
  <div>
    <h1>Add a deck</h1>
  </div>
);

const AddDeckButton = () =>
  <button
    type="button"
    onClick={auth.doAddDeck}
  >
    Add a deck
  </button>

export {AddDeck, AddDeckButton};