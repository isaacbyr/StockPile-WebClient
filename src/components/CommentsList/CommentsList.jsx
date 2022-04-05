import React, { Component } from 'react'
import Comment from '../Comment/Comment'
import './CommentsList.scss'
import axios from 'axios'

class CommentsList extends Component {
  state = {
    comments: [],
    comment: '',
  }
  componentDidMount() {
    this.fetchComments()
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

  fetchComments = () => {
    axios
      .get(`http://localhost:44317/api/comments/${this.props.ticker}`)
      .then((response) => {
        console.log(response.data)
        this.setState({ comments: response.data.reverse() })
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
        <div className='commentslist'>
          <h2 className='commentslist__header'>Comments</h2>
          <form className='commentslist__form' onSubmit={this.handleSubmit}>
            <input
              className='commentslist__form--input'
              name='comment'
              type='text'
              placeholder='Enter Comment ...'
              value={this.state.comment}
              onChange={this.handleChange}
            />
            <button className='commentslist__form--button' type='submit'>
              Post
            </button>
          </form>
          <div className='commentslist__list'>
            {this.state.comments.length > 0 ? (
              this.state.comments.map((comment) => {
                return (
                  <Comment
                    key={comment.Id}
                    comment={comment.Comment}
                    fullname={comment.FullName}
                    postedAt={comment.PostedAt}
                  />
                )
              })
            ) : (
              <h1 className='commentslist__empty'>No Comments :(</h1>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default CommentsList
