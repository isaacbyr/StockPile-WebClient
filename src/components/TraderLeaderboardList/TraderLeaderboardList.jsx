import React, { Component } from 'react'
import axios from 'axios'
import './TraderLeaderboardList.scss'
import LeaderboardItem from '../LeaderboardItem/LeaderboardItem'
import uuid from 'react-uuid'

class TraderLeaderboardList extends Component {
  state = {
    leaderboardItems: [],
  }

  componentDidMount = async () => {
    this.fetchFiends()
    //this.fetchTraderData()
  }

  fetchFiends = () => {
    axios
      .get('http://localhost:44317/api/friends')
      .then((response) => {
        this.fetchPortfolioData(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  fetchPortfolioData = (friends) => {
    friends.map((friend) => {
      axios
        .get(`http://localhost:44317/api/traderealizedPL/history/${friend.Id}`)
        .then((response) => {
          //console.log(response)
          this.convertToLeaderboardDisplayModel(response.data, friend)
        })
        .catch((err) => {
          console.log(err)
        })
    })
  }

  convertToLeaderboardDisplayModel = (friendPLHistory, friend) => {
    let wins = 0
    let losses = 0
    let winningPercentage = 0

    friendPLHistory.map((item) => {
      if (item.ProfitLoss > 0) {
        wins++
      } else {
        losses++
      }
    })

    winningPercentage = (wins / (wins + losses)).toFixed(2)

    var leaderboardItem = {
      name: friend.FirstName + ' ' + friend.LastName,
      winningPerc: winningPercentage,
      profitLoss: friendPLHistory[friendPLHistory.length - 1].TotalRealized,
    }

    this.setState({
      leaderboardItems: [...this.state.leaderboardItems, leaderboardItem],
    })

    return leaderboardItem
  }

  componentDidUpdate() {}

  render() {
    return (
      <>
        <section className='traderleaderboard'>
          <h2 className='traderleaderboard__header'>TraderPro Leaderboard</h2>
          <div className='traderleaderboard__table'>
            <p className='traderleaderboard__table--header'>Name</p>
            <p className='traderleaderboard__table--header'>Winning %</p>
            <p className='traderleaderboard__table--header'>ProfitLoss</p>
          </div>
          <div className='traderleaderboard__list'>
            {this.state.leaderboardItems.length > 0 ? (
              this.state.leaderboardItems.map((item) => {
                return (
                  <LeaderboardItem
                    key={uuid()}
                    name={item.name}
                    winningPerc={item.winningPerc}
                    profitLoss={item.profitLoss}
                  />
                )
              })
            ) : (
              <h2>Loading</h2>
            )}
          </div>
        </section>
      </>
    )
  }
}

export default TraderLeaderboardList
