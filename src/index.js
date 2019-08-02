//Import the React and ReactDOM Libaries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a React Componenet
const App = () => {
    const buttonText = { text: 'Click Me!' };
    const labelText = 'Enter Name:'
   return (
    <div>
    <label htmlFor="name" className="label">{labelText}</label>
    <input id="name" type="text"/>
    <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
  </div>
   );
}

//Take the react Componenet and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')

);