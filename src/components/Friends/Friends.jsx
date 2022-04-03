import axios from 'axios'
import React, { Component } from 'react'
import './Friends.scss'
import Friend from '../Friend/Friend'

class Friends extends Component {
  state = {
    friends: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    axios
      .get('http://localhost:44317/api/friends')
      .then((response) => {
        console.log(response)
        this.setState({ friends: response.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <section className='friends'>
        <h2 className='friends__header'>Friends</h2>
        <div className='friends__list'>
          {this.state.friends.length > 0 ? (
            this.state.friends.map((friend) => {
              return (
                <Friend
                  key={friend.id}
                  firstName={friend.FirstName}
                  lastName={friend.LastName}
                />
              )
            })
          ) : (
            <h2>Loading</h2>
          )}
        </div>
      </section>
    )
  }
}

export default Friends
