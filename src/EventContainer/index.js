import React, { Component } from 'react';
import CreateEvent from '../CreateEvent';

class EventContainer extends Component {
    state = {
        events: [],
        loading: true
    }
    addEvent = async (newEvent)  =>  {
        console.log(newEvent, 'in add event');
        try {
            const createEvent = await fetch('http://localhost:8000/event/', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(newEvent),
            headers: {
                'Content-Type': 'application/json'
            }
            })
            console.log(createEvent, 'create event ****');
            if(createEvent.status !== 200) {
                throw Error('Resource not found');
            }

            const createEventResponse = await createEvent.json();
            console.log(createEventResponse, '<createEventResponse in addEvent route');
            this.setState({
                events: [...this.state.events, createEventResponse.data],
                loading: false

            })
            return createEventResponse
        } catch(err) {
            console.log(err);
            return err;
        }
    }
    render() {
        console.log(this.state, 'state in render of event container');
        return(
        <div>
            <CreateEvent addEvent={this.addEvent}/>
        </div>
        )
    }
}

export default EventContainer;
