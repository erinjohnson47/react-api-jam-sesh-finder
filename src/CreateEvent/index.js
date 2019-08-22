import React, { Component } from 'react';
import { DateInput, TimeInput } from 'semantic-ui-calendar-react';
import { Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react';
import { withRouter } from "react-router";




class CreateEvent extends Component {
    state = {
        title: '',
        date: '',
        start_time: '',
        end_time: '',
        location: ''
    }
    handleChange = (e, {name, value}) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value });
        } else {
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
        }
        console.log(this.state)
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const addEvent = this.props.addEvent(this.state);
        console.log(addEvent, '<-addEvent in handleSubmit')
        addEvent.then((data) => {
            console.log(data, '<-data from add event')
            if(data.status.message === 'Success') {
                this.props.history.push('/event')
            } else {
                console.log(data, '<-data', this.props, '<-this.props')
            }
        }).catch((err) => {
            console.log(err)
            return err
        })
    }
    render() {
        return(
            <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh'}}>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' textAlign='center'>
                    Are You Ready to Jam?<br/> 
                    Create an Event
                    </Header>
                    <Form onSubmit={this.handleSubmit}>
                    <Segment stacked>
                    Event Name:
                    <Form.Input 
                        fluid icon='music' 
                        iconPosition='left' 
                        placeholder='event name' 
                        type='text' 
                        name='title' 
                        value={this.state.title}
                        onChange={this.handleChange}    
                        />
                    Date:
                    <DateInput 
                        iconPosition='left' 
                        placeholder='date of event' 
                        name='date' 
                        value={this.state.date} 
                        onChange={this.handleChange}
                        />
                    Start Time:
                    <TimeInput 
                        fluid icon='clock outline' 
                        placeholder='start time' 
                        iconPosition='left' 
                        name='start_time' 
                        value={this.state.start_time} 
                        onChange={this.handleChange}
                        />
                    End Time:
                    <TimeInput 
                        fluid icon='clock' 
                        iconPosition='left' 
                        placeholder='end time' 
                        name='end_time' 
                        value={this.state.end_time}
                        onChange={this.handleChange}   
                        />
                    Location:
                    <Form.Input 
                        fluid icon='map marker' 
                        iconPosition='left' 
                        placeholder='where is your event located?' type="text" 
                        name='location' 
                        value={this.state.location}
                        onChange={this.handleChange}/>
                    <Button fluid size='large' type='sumbit'>Submit</Button>
                    </Segment>
                </Form>
                </Grid.Column>
            </Grid>
        )
    }
}
export default withRouter(CreateEvent);