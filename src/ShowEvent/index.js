import React, { Component } from 'react';
import { Button, Icon, Item, Label } from 'semantic-ui-react';
import { withRouter } from "react-router";
import EditEvent from '../EditEvent';
import { async } from 'q';





class ShowEvent extends Component {
    state = {
            date: '',
            end_time: '',
            id: null,
            location: '',
            start_time: '',
            title: '',
            created_by: {
              id: null
            }
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
            console.log(getEvents, 'fetch request to backend');
            const eventsResponse = await getEvents.json();
            const eventArr = eventsResponse.data;
            const event = eventArr.filter(e => e.id === Number(this.props.match.params.id));
            console.log(event, 'this should be a single event')
            this.setState({
                date: event[0].date,
                end_time: event[0].end_time,
                id: event[0].id,
                location: event[0].location,
                start_time: event[0].start_time,
                title: event[0].title
            });
        }
        catch(err)  {
            console.log(err);
            return err;
        }
    }
    
    render() {
        console.log(this.state, "STATTEEEEEEEE");
        return(
        <div>
            <h1>{this.state['title']}</h1>
            <ul>
                <li>{this.state['location']}</li>
                <li>{this.state['start_time']}</li>
                <li>{this.state['end_time']}</li>
            </ul>
            <Button 
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
                    <EditEvent event = {this.state}/>
        </div>
        )
}}

export default withRouter(ShowEvent);



