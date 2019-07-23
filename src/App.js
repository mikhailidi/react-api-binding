import React from 'react';
import './App.css';
import Titles from './components/Titles';
import Weather from './components/Weather';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Titles/>
                <Weather
                    localTime={123}
                />

            </div>
        )
    };
}

export default App;
