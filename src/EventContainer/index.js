import React, { Component } from 'react';
import CreateEvent from '../CreateEvent';
import Events from '../EventList';


class EventContainer extends Component {
    state = {
        events: []
    }
    componentDidMount() {
        this.getAllEvents();
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
                events: [...this.state.events, createEventResponse.data]

            })
            return createEventResponse
        } catch(err) {
            console.log(err);
            return err;
        }
    }
    getAllEvents = async () =>  {
        try {
            const getEvents = await fetch('http://localhost:8000/event/', {
                credentials: 'include',
                method: 'GET'
            })
            console.log(getEvents, 'this should be all the events');
            const eventsResponse = await getEvents.json();
            console.log(eventsResponse);
            this.setState({
                events: [...eventsResponse.data]
            });
        }
        catch(err)  {
            console.log(err);
            return err;
        }
    }
    deleteEvent = async (id) => {
        try {
            const deleteEvent = await fetch('http://localhost:8000/event/'+id, {
                credentials: 'include',
                method: 'DELETE'
            })
            if(deleteEvent.status !== 200){
                throw Error('error on delete')
            }
            this.setState({
                events: this.state.events.filter((event) => event.id !== id)
            })
        } catch (err) {
            console.log(err)
            return err
        }
    }
    render() {
        console.log(this.state, 'state in render of event container');
        return(
        <div>
            <CreateEvent addEvent={this.addEvent}/>
            <Events events={this.state.events} removeEvent={this.deleteEvent}/>
        </div>
        )
    }
}

export default EventContainer;
