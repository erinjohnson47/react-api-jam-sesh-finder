import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Login extends Component {
    state = {
        username: '',
        password: ''
    }
    handleChange = (e)  =>  {
        this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const login = this.props.login(this.state);
        login.then((data) => {
            if(data.status.message === 'Success') {
                this.props.history.push('/user/profile')
            } else {
                console.log('there was an error on login')
            }
        }).catch((err) => {
            console.log(err)
            return err
        })
    }
    render(){
        return (
            <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh'}}>
            <Grid.Column style={{maxWidth: 450}}>
                <Header as='h2' textAlign='center'>
                Login
            </Header>
            <Form onSubmit={this.handleSubmit}>
            <Segment stacked>
            Username:
            <Form.Input fluid icon='user' iconPosition='left' placeholder='username' type='text' name='username' onChange={this.handleChange}/>
            Password:
            <Form.Input fluid icon='lock' iconPosition='left' type='password' name='password' onChange={this.handleChange}/>
            <Button fluid size='large' type='sumbit'>Login</Button>
            <Message>Not a Member? <Link to='/register'></Link>
            </Message>
            </Segment>
            </Form>
            </Grid.Column>
            </Grid>
        )
    }
}

export default Login;