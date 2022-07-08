import React, { Component } from 'react';
import Class from './component-practice/class';
import Functionality from './component-practice/functional';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Component Homework</h1>
        
        < Class /> 
        
        < Functionality />
      </div>
    );
  }
}