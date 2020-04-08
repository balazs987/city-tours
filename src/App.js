import React from 'react';
import Navbar from './components/Navbar/Navbar'
import TourList from './components/TourList';
import './App.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <TourList />
      </React.Fragment>
    );
  }
}

export default App;
