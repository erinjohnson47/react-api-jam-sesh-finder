import React, { Component } from 'react';
import { Button, Card, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

class Profile extends Component {
    state = {
        id: 1,
        username: '',
        email: '',
        image: '',
        location: '',
        }
    render(){
        return (
            <Grid columns={2} padded style={{ height: '100vh'}}>
            <Grid.Row>
                <Grid.Column width={4}>
                {
                    this.props.userInfo.loading ?
                    'Loading.....' :
                    <Card
                    image={'http://localhost:8000/profile_pics/' + this.props.userInfo.image}
                    header={this.props.userInfo.username}
                    meta={this.props.email}
                    description='greatest profile in the world'
                    />
                }
                </Grid.Column>
                <Grid.Column width={8}>
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