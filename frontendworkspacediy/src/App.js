import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import Footer from './Footer';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Route component={Header} />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Route component={Footer} />
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
