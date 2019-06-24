import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import ErrorBoundary from '../error-boundry';
import { SwapiServiceProvider } from '../swapi-service-context';

import {
  PeoplePage,
  PlanetPage,
  StarshipPage
} from '../pages';

import './app.css';

export default class App extends Component {

  state = {
    hasError: false,
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
      this.setState(({ swapiService }) => {
        const Service = swapiService instanceof SwapiService ?
                              DummySwapiService : SwapiService;
        console.log(Service.name);

        return {
          swapiService: new Service()
        }
      })
  }

  render() {

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange}/>

            <RandomPlanet />

            <PeoplePage />
            <PlanetPage />
            <StarshipPage />

            </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
