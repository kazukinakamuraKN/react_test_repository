import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Bye(props) {
	return <h1>goodbye, {props.name},{props.name2}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <Bye name="ele" name2="hana" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);