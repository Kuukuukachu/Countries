import * as React from 'react';
import Countries from "./pages/Countries";
import HeaderBar from "./components/header/HeaderBar";
import Search from "./components/Search";
import Filter from "./components/Filter";
import { Container } from '@mui/material';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <HeaderBar />
    <br />
    <Container maxWidth="xl">
      <Search />
      <Filter />
    </Container>
    <div style={{clear: "both"}} />
    <Container maxWidth="xl">
      <Countries />
    </Container>
    </>
  );
}

export default App;
