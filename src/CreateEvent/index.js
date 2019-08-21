import React, { Component } from 'react';

class CreateEvent extends Component {
    render() {
        console.log(this.state, 'state in render of event container');
        return(
        <div>
            hi from Create Event
        </div>
        )
    }
}

export default CreateEvent;