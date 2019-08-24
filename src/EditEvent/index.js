import React, { Component } from 'react';
import { Button, Header, Modal, Form, Input, Segment } from 'semantic-ui-react';

export default class EditEvent extends Component {
    state = {
        
    }
    // updateUser = (e)  =>  {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }
    // submitHandler = (e) =>  {
    //     e.preventDefault();
    //     console.log(this.state, 'state in submit handler register user');
    //     this.props.registerUser(this.state);
    // }
    render() {
        return(
            <Modal trigger={<Button color="green">Edit Event</Button>}>
                <Modal.Header>Edit Event</Modal.Header>
                <Modal.Content>
                <Modal.Description>
                <Header>Edit your event here</Header>
                <Form>
                    <Segment stacked>
                    Event Name:
                    <Form.Input 
                        fluid icon='music' 
                        iconPosition='left' 
                        placeholder='event name' 
                        type='text' 
                        name='title'    
                        />
                    Date:
                    <Form.Input 
                        type='date'
                        fluid icon='calendar'
                        iconPosition='left' 
                        placeholder='date of event' 
                        name='date' 
                        />
                    Start Time:
                    <Form.Input 
                        type='time'
                        fluid icon='clock outline' 
                        placeholder='hh:mm am/pm' 
                        iconPosition='left' 
                        name='start_time' 
                        />
                    End Time:
                    <Form.Input 
                        type='time'
                        fluid icon='clock' 
                        iconPosition='left' 
                        placeholder='end time' 
                        name='end_time'   
                        />
                    Location:
                    <Form.Input 
                        fluid icon='map marker' 
                        iconPosition='left' 
                        placeholder='where is your event located?' type="text" 
                        name='location' 
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