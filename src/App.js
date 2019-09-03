import React from 'react';
import './App.css';
import UserCard from './components/UserCard';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      usersText: 'drewgoenner'
    }
    console.log('My Card: ',this.state.users)
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/drewgoenner')
      .then(res => this.setState({users: [res.data]}))
      .catch(err => console.log(err))
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getUser = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.usersText}`)
      .then(res => this.setState({users: [res.data]}))
  }

  render(){

  return (
    <div className="App">
      <h1>GitHub User:</h1>
      <input
        type='text'
        value={this.state.usersText}
        onChange={this.handleChange}
        name='usersText'
        />
        <button onClick ={this.getUser}>Find a User</button>
      <UserCard user={this.state.users} />
    </div>
  );
  }
}

export default App;
