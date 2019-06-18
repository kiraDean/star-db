import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import ErrorBoundary from '../error-boundry';
import Row from '../row';


import {
  PersonList,
  StarshipList,
  PlanetList,
  PersonDetails,
  StarshipDetails,
  PlanetDetails
} from '../sw-components';



import './app.css';

export default class App extends Component {

    swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    return (
      <ErrorBoundary>
        <div className="stardb-app">
          <Header />

          <PersonDetails itemId={11} />
          <StarshipDetails itemId={10} />
          <PlanetDetails itemId={2} />

          <PersonList />

          <StarshipList />

          <PlanetList />


          </div>
      </ErrorBoundary>
    );
  }
}
