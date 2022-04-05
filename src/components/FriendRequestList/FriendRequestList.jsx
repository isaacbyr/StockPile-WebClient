import React, { Component } from 'react'
import './FriendRequestList.scss'
import FriendRequest from '../FriendRequest/FriendRequest'
import axios from 'axios'

class FriendRequestList extends Component {
  state = {
    friendRequests: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    axios
      .get('http://localhost:44317/api/friendrequests')
      .then((response) => {
        console.log(response)
        this.setState({ friendRequests: response.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    return (
      <section className='requests'>
        <h2 className='requests__header'>Requests</h2>
        <div className='requests__list'>
          {this.state.friendRequests.length > 0 ? (
            this.state.friendRequests.map((friend) => {
              return (
                <FriendRequest
                  key={friend.id}
                  firstName={friend.FirstName}
                  lastName={friend.LastName}
                />
              )
            })
          ) : (
            <h2 className='requests__empty'>No Requests :(</h2>
          )}
        </div>
      </section>
    )
  }
}

export default FriendRequestList
