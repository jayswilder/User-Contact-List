import React from 'react';
import ListContacts from './components/ContactList';
import logo from './contact-logo.png';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contactsList: [],
    }
  }

  componentDidMount = () => {
    fetch('https://randomuser.me/api?results=40')
      .then(response => response.json())
      .then(data => {
        let contactsList = data.results.map(user => user);
        this.setState({
          contactsList
        }, () => { console.log(this.state) })
      })
      .catch(error => console.log(`Error, ${error}`))
  }


  render() {
    return (
      <div>
        <header className="App-header">
          <img id="logo" src={logo} alt="logo" />
          <h1 className="white-font">My Contacts</h1>
        </header>
        <div className="layout">
          <ListContacts contactsList={this.state.contactsList} />
        </div>
      </div>
    )
  }
}

export default App;