import React, {Component} from 'react';
import Friend from './Friend';
import FriendForm from '../FriendForm/FriendForm';
import axios from 'axios';


class FriendList extends Component {
    constructor() {
        super();
        this.state = {
            data : []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/friends')
            .then((response) => this.setState({data:response.data}))
            .catch((err) => console.log(err))
    }

    sendData = newUser => {
        axios.post('http://localhost:5000/friends', newUser).then((res)=>this.setState({data:res.data}))
    }

    render() {
        return (
            <>
            <FriendForm sendData={this.sendData}/>
            { this.state.data.map(item => <Friend friend={item}/>) }
            </>
        );
    }
}

export default FriendList;