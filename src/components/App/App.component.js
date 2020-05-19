import React from 'react';
import './App.css';
import Footer from '../Footer/Footer.component';
import Router from '../Router/Router';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div className="App">
        <Router/>
        <Footer/>
      </div>
    );
  }
}

export default App;