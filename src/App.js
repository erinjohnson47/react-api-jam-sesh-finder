import React, { Component } from 'react';
import './App.css';
import Registration from './Registration'
import Profile from './Profile';
import EventContainer from './EventContainer';
import { Route, Switch } from 'react-router-dom';
import Login from './Login'


const My404 = () =>{
  return (
    <div>
      Uh oh, nothing here, <a href='/'>take me back home!</a>
    </div>
    )
}

class App extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    location: '',
    image: '',
    loading: true
  }
  login = async (loginInfo) => {
    try {
      const loginResponse = await fetch('http://localhost:8000/user/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedResponse = await loginResponse.json();
      console.log(parsedResponse, '<-parsedResponse in login');
      this.setState({
          ...parsedResponse.data,
          loading: false
      })
      return parsedResponse
    } catch (err) {
      console.log(err)
      return err
    }
  }
  register = async (data) =>  {
    try {
      const registerResponse = await fetch('http://localhost:8000/user/register', {
        method: 'POST',
        credentials: 'include',
        body: data,
        headers: {
          'enctype': 'multipart/form-data'
        }
      })
      const parsedResponse = await registerResponse.json();
      console.log(parsedResponse, '<-parsedResponse in register');
      this.setState({
          ...parsedResponse.data,
          loading: false
      })
      return parsedResponse;
    }
    catch(err)  {
      console.log(err);
      return err;
    }
  }
  render(){
    return (
      <main>
        <Switch>
          <Route exact path='/user/register' render = {(props) => <Registration {...props} register={this.register} /> } /> 
          <Route exact path='/user/login' render = {(props) => <Login {...props} login={this.login}/>} />
          <Route exact path='/user/profile' render = {(props) => <Profile {...props} userInfo={this.state} /> } />
          <Route exact path='/event' render = {(props) => <EventContainer {...props} addEvent={this.addEvent}/> } />
          <Route component={My404} />
        </Switch>
      </main>
    );
  }
}

export default App;




