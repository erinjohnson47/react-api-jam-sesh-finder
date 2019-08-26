import React, { Component } from 'react';
import './App.css';
import Registration from './Registration'
import Profile from './Profile';
import EventContainer from './EventContainer';
import ShowEvent from './ShowEvent'
import { Route, Switch, Link } from 'react-router-dom';
import Login from './Login'
import { withRouter } from "react-router";


const My404 = () =>{
  return (
    <div>
      Uh oh, nothing here, <a href='/user/profile'>take me back home!</a>
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
    events: [],
    singleEvent: {
      date: '',
      end_time: '',
      id: null,
      location: '',
      start_time: '',
      title: '',
      created_by: {
        id: null
      }
    }
  }

  componentDidMount(){
    this.getAllEvents();
    const user = localStorage.getItem("jam_user")
    const parsedUser = JSON.parse(user)
    if (user){
      this.setState({
        username: parsedUser.username,
        email: parsedUser.email,
        location: parsedUser.location,
        image: parsedUser.image
      })
    }
  }

  addNewEvent = (event) =>{
    this.setState({
      events: [...this.state.events, event]
    })
  }

  getAllEvents = async () =>  {
    try {
        const getEvents = await fetch(`${process.env.REACT_APP_BACKEND_URL}/event/`, {
            credentials: 'include',
            method: 'GET'
        })
        const eventsResponse = await getEvents.json();
        this.setState({
            events: [...eventsResponse.data],
        });
    }
    catch(err)  {
        console.log(err);
        return err;
    }
}
showEvent = (id) => {
  const event = this.state.events.filter(event => event.id === id);
  this.setState({
    singleEvent: event
  })
  this.props.history.push('/event/' + id)
}
  login = async (loginInfo) => {
    try {
      const loginResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/login`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedResponse = await loginResponse.json();
      localStorage.setItem("jam_user", JSON.stringify(parsedResponse.data))
      this.setState({
          ...parsedResponse.data
      })
      return parsedResponse
    } catch (err) {
      console.log(err)
      return err
    }
  }
  register = async (data) =>  {
    try {
      const registerResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/register`, {
        method: 'POST',
        credentials: 'include',
        body: data,
        headers: {
          'enctype': 'multipart/form-data'
        }
      })
      const parsedResponse = await registerResponse.json();
      this.setState({
          ...parsedResponse.data
      })
      return parsedResponse;
    }
    catch(err)  {
      console.log(err);
      return err;
    }
  }
  logout
  render(){
    return (
      <main>
        <ul>
          <li><Link to='/user/register'>Reg</Link></li>
          <li><Link to='/user/login'>Log</Link></li>
          <li><Link to='/user/profile'>Prof</Link></li>
          <li><Link to='/event'>Event</Link></li>
        </ul>
        <Switch>
          <Route exact path='/user/register' render = {(props) => <Registration {...props} register={this.register} /> } /> 
          <Route exact path='/user/login' render = {(props) => <Login {...props} login={this.login}/>} />
          <Route exact path='/user/profile' render = {(props) => <Profile {...props} userInfo={this.state} /> } />
          <Route exact path='/event' render = {(props) => <EventContainer {...props} events={this.state.events} addNewEvent={this.addNewEvent} showEvent={this.showEvent}/> } />
          <Route exact path='/event/:id' render={(props) => <ShowEvent {...props} events={this.state.events} singleEvent = {this.state.singleEvent} getAllEvents= {this.getAllEvents} /> } />
          <Route component={My404} />
        </Switch>
      </main>
    );
  }
}

export default withRouter(App);




