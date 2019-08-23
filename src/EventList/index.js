import React from 'react';
import { Button, Icon, Item, Label } from 'semantic-ui-react'

const Events = ({ events, removeEvent, showEvent }) =>  {
    console.log(events, 'events in EventList')
    const eventList = events.map((event)  =>  {
        return(
            <Item key={event.id}>
                <Item.Content>
                    <Item.Header>{event.title}</Item.Header>
                    <Item.Meta>{event.date}: {event.start_time} - {event.end_time}</Item.Meta>
                </Item.Content>
                <Item.Extra>
                <Button 
                    primary
                    floated='left'
                    onClick={() => showEvent(event.id)}
                    >
                    See Details  
                        <Icon name='info' floated='left'/>
                    </Button>
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
                        onClick={() => removeEvent(event.id)}
                        >
                    Delete Event                    
                    <Icon name='delete' />
                    </Button>
                </Item.Extra>
            </Item>
        )
    })

    return(
        <div>
            <h2>All Events</h2>
            <Item.Group divided>
                {eventList}
            </Item.Group>
        </div>
    )
}

export default Events