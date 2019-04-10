import React, {Component} from 'react';
import './FriendForm.css';

export default class FriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            age : '',
            email : ''
        }
    }

    inputChange = e => {
        this.setState({ [e.target.name]:e.target.value });
        console.log(this.state);
    }

    addFriend = e => {
        e.preventDefault();
        this.props.sendData(this.state);
    }

    render() {
        return(
            <form
                className="friend-form"
                onSubmit={this.addFriend}
            >   
                <input 
                        className="ff-input" 
                        placeholder="Name" 
                        value={this.state.name}
                        name='name'
                        type='text' 
                        onChange={this.inputChange}
                />
                <input 
                        className="ff-input" 
                        placeholder="Age" 
                        value={this.state.age}
                        name='age'
                        type='text' 
                        onChange={this.inputChange}
                />
                <input 
                        className="ff-input" 
                        placeholder="Email" 
                        value={this.state.email}
                        name='email'
                        type='text' 
                        onChange={this.inputChange}
                />
                <button>Submit</button>
            </form>
        );
    }
}