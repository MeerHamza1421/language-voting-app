import React, { Component } from 'react'
import './language.css'
export class Language extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.vote = this.vote.bind(this);
    }
    vote() {
        this.setState(
            {
                counter: this.state.counter + 1
            }
        )
    }
    render() {
        return (
            <div className="language">
                <p>{this.state.counter}</p>
                <p>{this.props.lang}</p>
                <button onClick={this.vote}>click here to vote</button>
            </div>
        )
    }
}
export default Language
