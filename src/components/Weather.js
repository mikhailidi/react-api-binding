import React from 'react';

const Weather = props => (
    <div>
        <p>Summary: clear</p>
        <p>Temperature: 23</p>
        <p>Wind speed: 8.59 km/h</p>
        <p>Current time: {props.localTime}</p>
    </div>
);

export default Weather;
