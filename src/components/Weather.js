import React from 'react';
import DarkSkyApi from '../DarkSkyApi';
import {convertToHourAndMinutes} from '../helpers/UnixTimeHelper';

class Weather extends React.Component {

    state = {
        loading: true,
        city: {
            latitude: 52.52,
            longitude: 13.405,
            localTime: undefined
        },
        weather: {}
    };


    setWeather() {
        let data = DarkSkyApi.getWeather(this.state.city.latitude, this.state.city.longitude);
        data.then(data => {
            console.log(data);

            this.setState({
                city: {
                    localTime: data.currently.time
                },
                weather: {
                    temperature: data.currently.temperature,
                    summary: data.currently.summary,
                    windSpeed: data.currently.windSpeed
                },
                loading: false
            });
        })
    }

    componentDidMount() {
        this.setWeather();
    }

    render() {
        if (this.state.loading) {
            return (<div><p>Loading...</p></div>);
        }
        return (
            <div>
                {this.state.weather.summary && <p>Summary: {this.state.weather.summary}</p>}
                {this.state.weather.temperature && <p>Temperature: {this.state.weather.temperature}</p>}
                {this.state.weather.windSpeed && <p>Wind speed: {this.state.weather.windSpeed}</p>}
                {this.state.city.localTime && <p>Local time: {convertToHourAndMinutes(this.state.city.localTime)}</p>}
            </div>
        );
    }
};

export default Weather;
