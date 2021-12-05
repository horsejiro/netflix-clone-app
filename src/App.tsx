import React from 'react';
import './App.css';
import { Banner } from './compornents/Banner';
import { Nav } from './compornents/Nav';
import { Row } from './compornents/Row';
import { requests } from './request';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row 
      title="NETFLIX ORIGUINALS"
      fetchUrl={requests.feachNetflixOriginals}
      isLargeRow
      />

      <Row title="Top Rated" fetchUrl={requests.feactTopRated} />
      <Row title="Action Movies" fetchUrl={requests.feactActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.feactComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.feactHorrorMovies} />
      <Row title="Romance Moveis" fetchUrl={requests.feactRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.feactDocumentMovies} />

    </div>
  );
}

export default App;
