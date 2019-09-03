import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    }
    console.log(this.state.user)
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/drewgoenner')
      .then(res => this.setState({user: res.data}))
      .catch(err => console.log(err))
  }

  render(){

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
  }
}

export default App;
