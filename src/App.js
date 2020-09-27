import React, { Component } from 'react'
import './App.css';
import img1 from './Languages-Pics/python-icon.jpg'
import img2 from './Languages-Pics/Javascript-icon.jpg'
import img3 from './Languages-Pics/java.jpg'
import img4 from './Languages-Pics/C++.jpg'
import img5 from './Languages-Pics/Go-icon.jpg'
import Language from './components/Language'
class App extends Component {
  render() {
    return (
      < >
        <div className="main-title">
          <p>The best language voting app 2020</p>
        </div>
        <div className="voting-cards">
          <Language lang="python" image={img1} info="I'm Specialist in almost everything 😎" />
          <Language lang="Javascript" image={img2} info="I'm Specialist in Web development both front and backend 🧐" />
          <Language lang="Java" image={img3} info="I'm specialist in backend, desktop and android development 🤓" />
          <Language lang="C++" image={img4} info="I'm Specialist in desktop development 😏" />
          <Language lang="GoLang" image={img5} info="I'm Specialist networking and system application writings 😉" />
        </div>
      </ >
    )
  }
}
export default App;