import React, { Component } from 'react'
import './App.css';
import Language from './components/Language'
export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-main">
          <p id="only-p">The best language voting app 2020</p>
          <p id="p">Here is the list of top five Languages</p>
          <Language lang="python" />
          <Language lang="Javascript" />
          <Language lang="Java" />
          <Language lang="C/C++" />
          <Language lang="GoLang" />
        </div>
      </div>
    )
  }
}
export default App;