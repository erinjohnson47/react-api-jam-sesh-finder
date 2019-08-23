import React, { Component } from 'react';
import { Button, Icon, Item, Label } from 'semantic-ui-react';
import { withRouter } from "react-router";





class ShowEvent extends Component {
    state = {
        singleEvent: {
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
    
    render() {
        return(
        <div>
            <h1>{this.props.singleEvent[0]['title']}</h1>
            <ul>
                <li>{this.props.singleEvent[0]['location']}</li>
                <li>{this.props.singleEvent[0]['start_time']}</li>
                <li>{this.props.singleEvent[0]['end_time']}</li>
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
                        onClick={() => this.removeEvent(this.props.singleEvent[0]['id'])}
                        >
                    Delete Event                    
                    <Icon name='delete' />
                    </Button>
        </div>
        )
}}

export default withRouter(ShowEvent);



