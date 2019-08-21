import React, { Component } from 'react';
import './App.css';
import Registration from './Registration'
import { Route, Switch } from 'react-router-dom';

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
    image: ''
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
      console.log(parsedResponse);
      this.setState(()  =>  {
        return{
          ...parsedResponse.data
        }
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
          <Route exact path='/user/register' render = {(props) => <Registration {...props} register= {this.register} /> } /> 
          <Route component={My404} />
        </Switch>
      </main>
    );
  }
}

export default App;




