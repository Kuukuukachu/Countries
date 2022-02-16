import * as React from 'react';
import CountryCard from "./components/CountryCard";
import HeaderBar from "./components/header/HeaderBar";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="App">
    <HeaderBar />
    <br />
    <div>
      <Search />
      <Filter />
    </div>
    <br />
      <div>
        <CountryCard />
        <p>Hey</p>
      </div>
    </div>
  );
}

export default App;
