import React, { Component } from 'react'
import './FriendRequestList.scss'
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
    return <div>FriendRequestList</div>
  }
}

export default FriendRequestList
