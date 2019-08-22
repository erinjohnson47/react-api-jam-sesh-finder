import React from 'react';

const Events = (props) =>  {
    console.log(props)
    const eventList = props.events.map((event)  =>  {
        return(
            <li key={event.id}>
                <span>{event.title}</span>
            </li>
        )
    })

    return(
        <div>
            <h2>All Events</h2>
            <ul>
                {eventList}
            </ul>
        </div>
    )
}

export default Events