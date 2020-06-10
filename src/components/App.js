import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StackList from './StackList';

const App = () => {
  return (
    <div>
      <h2>Information Store</h2>
      <hr/>
      <StackList />
      <hr />
      <Link to='stack_form'><h4>Create A New Information</h4></Link>
    </div>
  )
}

export default App;