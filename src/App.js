import React from 'react';
import './App.css';
import UserCard from './components/UserCard';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
    console.log('My Card: ',this.state.users)
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/drewgoenner')
      .then(res => this.setState({users: [res.data]}))
      .catch(err => console.log(err))
  }

  render(){

  return (
    <div className="App">
      <UserCard user={this.state.users} />
    </div>
  );
  }
}

export default App;
