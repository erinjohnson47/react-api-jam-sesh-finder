import React, { Component } from 'react';
import { Button, Card, Grid, Header, Image, Message, Segment, Icon } from 'semantic-ui-react';

class Profile extends Component {
    state = {
        id: 1,
        username: '',
        email: '',
        image: '',
        location: ''
        }
    
    logoutUser = async () => {
        try {
            await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/logout`)
            localStorage.clear()
            this.props.history.push('/user/login')
        } catch (err) {
            console.log(err)
            return err
        }
    }
    render(){
        return (
            <Grid columns={2} padded style={{ height: '100vh'}}>
            <Grid.Row>
                <Grid.Column width={4}>
                    <Card
                    image={`${process.env.REACT_APP_BACKEND_URL}/profile_pics/${this.props.userInfo.image}`}
                    header={this.props.userInfo.username}
                    meta={this.props.email}
                    description='greatest profile in the world'
                    />
                    <Button 
                        color='red'
                        onClick={this.logoutUser}
                    >
                        Logout
                    </Button> 
                </Grid.Column>
                <Grid.Column width={4}>
                <Header as='h2' textAlign='center'>
                    {this.props.userInfo.username}'s Events
                </Header>
                </Grid.Column>
            </Grid.Row>
            </Grid>
            )   
    }
}

export default Profile;