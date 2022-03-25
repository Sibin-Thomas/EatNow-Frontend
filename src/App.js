import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.username + ' ' + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <div className="row align-items-center">
        <div className="col">
        </div>
        <div className="col border border-5 border-primary bg-light">
          <form onSubmit={this.handleSubmit}>
              <label>Username:</label>
              <br/>
              <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
              <br/>
              <label>Password:</label>
              <br/>
              <input type="text" value={this.state.password} onChange={this.handlePasswordChange} />
              <br/>
            <input className="bg-warning"type="submit" value="Submit" />
          </form>
        </div>
        <div className="col">
        </div>
      </div>
    );
  }
}

export default App;