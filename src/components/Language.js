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
        alert('Hurray 🎉 You cast Your vote');
        this.setState(
            {
                counter: this.state.counter + 1
            }
        )
    }

    render() {
        return (
            <div className="language-body">
                <img src={this.props.image} alt="something went wrong" />
                <div className="language">
                    <p>{`Hey fella👋 i'm ${this.props.lang}. ${this.props.info} . You can build amazing things using me. If you like me click below 👇`}</p>
                    <button onClick={this.vote}>Vote </button>
                    <p>{this.state.counter}</p>
                </div>
            </div>
        )
    }
}
export default Language
