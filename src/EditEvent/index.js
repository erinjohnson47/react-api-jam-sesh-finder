import React, { Component } from 'react';
import { Button, Header, Modal, Form, Input, Segment } from 'semantic-ui-react';

export default class EditEvent extends Component {
    state = {
        modalOpen: false,
        date: '',
        end_time: '',
        id: null,
        location: '',
        start_time: '',
        title: ''
    }
    fillForm = ()  =>  {
        
        const event = this.props.event;
        this.setState({
            date: event.date,
            end_time: event.end_time,
            id: event.id,
            location: event.location,
            start_time: event.start_time,
            title: event.title,
            modalOpen: true
        })
    }
    handleChange = (e)  =>  {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state);
    }
    submitHandler = (e) =>  {
        e.preventDefault();
        this.props.updateEvent(this.state);
        this.setState({
            modalOpen: false
        })
        
    }
    render() {
        return(
            <Modal open={this.state.modalOpen} trigger={<Button color="green" onClick={this.fillForm}>Edit Event</Button>}>
                <Modal.Header>Edit Event</Modal.Header>
                <Modal.Content>
                <Modal.Description>
                <Header>Edit your event here</Header>
                <Form onSubmit={this.submitHandler}>
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
                    <Form.Input 
                        type='date'
                        fluid icon='calendar'
                        iconPosition='left' 
                        placeholder='date of event' 
                        name='date' 
                        value ={this.state.date}
                        onChange={this.handleChange} 
                        />
                    Start Time:
                    <Form.Input 
                        type='time'
                        fluid icon='clock outline' 
                        placeholder='hh:mm am/pm' 
                        iconPosition='left' 
                        name='start_time' 
                        value={this.state.start_time}
                        onChange={this.handleChange} 
                        />
                    End Time:
                    <Form.Input 
                        type='time'
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
                        onChange={this.handleChange} 
                    />
                    <Button fluid size='large' type='sumbit'>Submit</Button>
                    </Segment>
                </Form>
                </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}

