import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DashboardComment from '../DashboardComment/DashboardComment'
import Trending from '../../assets/Icons/trending_icon.png'
import './DashboardCommentsList.scss'
import axios from 'axios'

class DashboardCommentsList extends Component {
  state = {
    comments: [],
    comment: '',
    trendingStock: '',
  }
  componentDidMount() {
    this.fetchComments()
    this.fetchTrending()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.isFormValid()) {
      this.postComment()
    }
  }

  isFormValid = () => {
    if (!this.state.comment.trim()) {
      return false
    }
    return true
  }

  postComment = () => {
    let comment = {
      Comment: this.state.comment,
      Ticker: this.props.ticker,
      UserId: '',
    }
    axios
      .post('http://localhost:44317/api/comments', comment)
      .then((response) => {
        console.log(response)
        this.fetchComments()
        this.state.comment = ''
      })
      .catch((err) => {
        console.log(err)
      })
  }

  fetchTrending = () => {
    axios
      .get('http://localhost:44317/api/comments/trending')
      .then((response) => {
        console.log(response.data)
        this.setState({ trendingStock: response.data.Ticker })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  fetchComments = () => {
    axios
      .get('http://localhost:44317/api/comments')
      .then((response) => {
        console.log(response.data)
        this.setState({ comments: response.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.ticker != this.props.ticker) {
      this.fetchComments()
    }
  }

  render() {
    return (
      <>
        <div className='dashCommentsList'>
          <div className='dashCommentsList__header-wrapper'>
            <h2 className='dashCommentsList__header'>Comments</h2>
            <div className='dashCommentsList__trending-wrapper'>
              <Link to={`/portfoliopro/${this.state.trendingStock}`}>
                <p className='dashCommentsList__trending--text'>
                  {this.state.trendingStock}
                </p>
              </Link>
              <img
                className='dashCommentsList__trending--icon'
                src={Trending}
              />
            </div>
          </div>
          <div className='dashCommentsList__list'>
            {this.state.comments.length > 0 ? (
              this.state.comments.map((comment) => {
                return (
                  <DashboardComment
                    key={comment.Id}
                    ticker={comment.Ticker}
                    comment={comment.Comment}
                    fullname={comment.FullName}
                    postedAt={comment.PostedAt}
                  />
                )
              })
            ) : (
              <h1 className='dashCommentsList__empty'>No Comments :(</h1>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default DashboardCommentsList
