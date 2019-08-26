import React, { Component } from 'react';
import { Button, Icon, Item, Label } from 'semantic-ui-react';
import { withRouter } from "react-router";
import EditEvent from '../EditEvent';





class ShowEvent extends Component {
    state = {
            date: '',
            end_time: '',
            id: null,
            location: '',
            start_time: '',
            title: '',
    }
    componentDidMount(){
        this.getEvent();
    }
    removeEvent = async (id) => {
        try {
            const deleteEvent = await fetch('http://localhost:8000/event/'+id, {
                credentials: 'include',
                method: 'DELETE'
            })
            if(deleteEvent.status !== 200){
                throw Error('error on delete')
            }
            this.props.history.push('/event');
            this.props.getAllEvents();
        } catch (err) {
            console.log(err)
            return err
        }
    }
    getEvent = async ()  =>  {
        try {
            const getEvents = await fetch('http://localhost:8000/event/', {
                credentials: 'include',
                method: 'GET'
            })
            const eventsResponse = await getEvents.json();
            const eventArr = eventsResponse.data;
            const event = eventArr.filter(e => e.id === Number(this.props.match.params.id));
            const date = event[0].date;
            const arrDate = date.split('-');
            const properDate = arrDate[2] + '-' + arrDate[1] + '-' + arrDate[0];
            this.setState({
                date: properDate,
                end_time: event[0].end_time,
                id: event[0].id,
                location: event[0].location,
                start_time: event[0].start_time,
                title: event[0].title,
            });
        }
        catch(err)  {
            console.log(err);
            return err;
        }
    }
    joinEvent = async (id) => {
        try {
            console.log(this.state.id, 'this.state.id in join event')
            const idToStr = this.state.id.toString();
            console.log(idToStr, 'id to string', typeof(idToStr), 'type of id to string')
            const joinEvent = await fetch('http://localhost:8000/event/join/', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(idToStr),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(joinEvent, 'joinEvent route');
            if(joinEvent.status !== 200) {
                throw Error('Resource not found');
            }
            const joinEventResponse = await joinEvent.json();
            console.log(joinEventResponse, '<-joinEventResponse in joinEvent route');
            return joinEventResponse
        } catch (err) {
            console.log(err)
            return err
        }
    }
    updateEvent = async (event)  =>  {
        delete event.modalOpen
        try {
            console.log(event);
            this.setState({
                date: event.date,
                end_time: event.end_time,
                id: event.id,
                location: event.location,
                start_time: event.start_time,
                title: event.title
            })
            const editRequest = await fetch('http://localhost:8000/event/' + this.state.id, {
            method: 'PUT',
            body: JSON.stringify(event),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
            })
            console.log(editRequest, 'this is edit request');
            if(editRequest.status !== 200){
                throw Error('edit is not working')
            }
            const editResponse = await editRequest.json();
            console.log(editResponse, 'this is edit response');
        }
        catch(err)  {
            console.log(err);
            return err;
        }
    }
    
    render() {
        return(
        <div>
            <h1>{this.state['title']}</h1>
            <ul>
                <li>{this.state['location']}</li>
                <li>{this.state['start_time']}</li>
                <li>{this.state['end_time']}</li>
            </ul>
            <Button 
                onClick={() => this.joinEvent(this.state['id'])}
                color='green' 
                floated='left'
                >
                Join Event
                <Icon name='right chevron' />
            </Button>
            <Button 
                color='red'
                floated='left'
                onClick={() => this.removeEvent(this.state['id'])}
                >
                Delete Event                    
                <Icon name='delete' />
            </Button>
            <EditEvent event = {this.state} updateEvent={this.updateEvent}/>
        </div>
        )
}}

export default withRouter(ShowEvent);



