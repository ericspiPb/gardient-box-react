import React from 'react';

import GardientBox from './components/gardientbox/gardientbox.component';

import './App.css';

function App() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(event.currentTarget.innerText, "clicked");
  }

  return (
    <div className="app">
      <GardientBox title="Hello" content="World" onClick={handleClick} />
      <GardientBox title="Hello" content="World" onClick={handleClick} />
      <GardientBox title="Hello" content="World" onClick={handleClick} />
      <GardientBox title="Hello" content="World" onClick={handleClick} />
      <GardientBox title="Hello" content="World" onClick={handleClick} />
      <GardientBox title="Hello" content="World" onClick={handleClick} />
    </div>
  );
}

export default App;
