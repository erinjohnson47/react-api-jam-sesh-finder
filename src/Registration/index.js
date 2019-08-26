import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Registration extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        location: '',
        image: {}
    }
    handleChange = (e)  =>  {
        if(e.target.name !== 'image')  {
            this.setState({[e.target.name]: e.target.value});
        } else {
            console.log(e.target.files[0]);
            this.setState({
                image: e.target.files[0]
            });
        }
    }
    handleSubmit = async (e) =>  {
        e.preventDefault();
        const data = new FormData();
        data.append('file', this.state.image);
        data.append('username', this.state.username);
        data.append('password', this.state.password);
        data.append('email', this.state.email);
        data.append('location', this.state.location);
        // console.log(data, '<-----data', data.entries(), '<------data entries');
        // for (let pair of data.entries()){
        //     console.log(pair[0], ',******** ', pair[1])
        // }
        const registerCall = this.props.register(data);

        registerCall.then((data) => {
        if(data.status.message === "Success"){
            this.props.history.push('/user/profile')
        } else {
            console.log('error message')
        }
    })
    }
    render(){
        return (
            <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh'}}>
            <Grid.Column style={{maxWidth: 450}}>
                <Header as='h2' textAlign='center'>
                Register
            </Header>
            <Form onSubmit={this.handleSubmit}>
        <Segment stacked>
        Username:
        <Form.Input fluid icon='user' iconPosition='left' placeholder='username' type='text' name='username' onChange={this.handleChange}/>
        Email:
        <Form.Input fluid icon='mail' iconPosition='left' placeholder='email' type='text' name='email' onChange={this.handleChange}/>
        Password:
        <Form.Input fluid icon='lock' iconPosition='left' type='password' name='password' onChange={this.handleChange}/>
        Zip:
        <Form.Input fluid icon='map' iconPosition='left' type="text" name='location' onChange={this.handleChange}/>
        Image:
        <Form.Input fluid icon='image' iconPosition='left' type="file" name='image' onChange={this.handleChange}/>
        <Button fluid size='large' type='sumbit'>Register</Button>
        <Message>
            Already a member? <Link to='/login'></Link>
        </Message>
        </Segment>
    </Form>
    </Grid.Column>
    </Grid>
    )
    }
}

export default Registration;
