//Import the React and ReactDOM Libaries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a React Componenet
const App = () => {
   return <div>Hello World!</div>
}

//Take the react Componenet and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')

);