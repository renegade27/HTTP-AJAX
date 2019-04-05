import React, {Component} from 'react';
import './Friend.css';

class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit : false,
            newFriend : {
                id : this.props.friend.id,
                name : '',
                age : '',
                email : ''
            }
        }
    }

    inputChange = e => {
        e.persist();
        let value = e.target.value;
        this.setState(prevState => ({
        newFriend: { ...prevState.newFriend, [e.target.name]: value }
        }));
    }

    render() {
        let body;
        if(!this.state.edit) { body =
            <> 
                <i className="far fa-edit" onClick={() => { this.setState(prevState =>{ return { edit:!prevState.edit}})}}> </i>
                <i className="fas fa-trash-alt" onClick={(e) => {this.props.buttonHelper(e, this.props.friend)}}></i>
                <p>{this.props.friend.id}</p>
                <p>{this.props.friend.name}</p>
                <p>{this.props.friend.age}</p>
                <p>{this.props.friend.email}</p>
            </>
        }
        if(this.state.edit) { body = 
            <form
                className="edit-form"
                onSubmit={(e) => {
                    setTimeout(this.setState({edit:false}), 5000)
                    this.props.buttonHelper(e, this.state.newFriend)
                }}
            >   
                <input 
                        className="edit-input" 
                        placeholder="Name" 
                        value={this.state.name}
                        name='name'
                        type='text' 
                        onChange={this.inputChange}
                />
                <input 
                        className="edit-input" 
                        placeholder="Age" 
                        value={this.state.age}
                        name='age'
                        type='text' 
                        onChange={this.inputChange}
                />
                <input 
                        className="edit-input" 
                        placeholder="Email" 
                        value={this.state.email}
                        name='email'
                        type='text' 
                        onChange={this.inputChange}
                />
                <button>Submit</button>
            </form>
        }
        return (
            <div className="friend-wrapper">
                {body}
            </div>
        );
    }
}

export default Friend;