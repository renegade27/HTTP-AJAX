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

    buttonHelper = (e, friend) => {
        e.preventDefault();
        if (e.target.className.includes('trash')) {
            console.log('delete');
            axios.delete(`http://localhost:5000/friends/${friend.id}`).then(response => this.setState({data:response.data})).catch(err => console.log(err))
        }
        if (e.target.className.includes('edit')) {
            console.log('edit');
            axios.put(`http://localhost:5000/friends/${friend.id}`, friend).then(response => this.setState({data:response.data})).catch(err => console.log(err))
        }
    }

    render() {
        return (
            <>
            <FriendForm sendData={this.sendData} type='create'/>
            { this.state.data.map(item => <Friend friend={item} key={item.id} buttonHelper={this.buttonHelper}/>) }
            </>
        );
    }
}

export default FriendList;