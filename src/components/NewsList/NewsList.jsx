import React, { Component } from 'react'
import './NewsList.scss'
import axios from 'axios'
import NewsItem from '../NewsItem/NewsItem'

class NewsList extends Component {
  state = {
    articles: [],
  }
  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    axios
      .get(
        `https://api.polygon.io/v2/reference/news?ticker=${this.props.ticker}&order=desc&limit=15&sort=published_utc&apiKey=g3B6V1o8p6eb1foQLIPYHI46hrnq8Sw1`
      )
      .then((response) => {
        console.log(response.data.results)
        this.setState({ articles: response.data.results })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.ticker != this.props.ticker) {
      this.fetchData()
    }
  }

  render() {
    return (
      <div className='newslist'>
        <h2 className='newslist__header'>Latest News</h2>
        <div className='newslist__list'>
          {this.state.articles.length > 0 ? (
            this.state.articles.map((article) => {
              return (
                <NewsItem
                  key={article.id}
                  title={article.title}
                  url={article.article_url}
                  logo_url={article.image_url}
                />
              )
            })
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </div>
    )
  }
}

export default NewsList
