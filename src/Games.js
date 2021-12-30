import React, { Component } from 'react'

class Games extends Component {
    gamesList = ["CS", "Lol", "Fifa", "Callofduty", "NBA"]
    render() {
        return (
            <div>
                <h1>Games Here</h1>
                <ul>
                    {this.gamesList.map(i => <li>{i}</li>)}
                </ul>
            </div>
        )
    }
}

export default Games;
