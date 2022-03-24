import React from 'react'
import './Reviews.scss'

const Reviews = () => {
  return (
    <section className='review'>
      <h2 className='review__header'>See What Our Customers Are Saying!</h2>
      <div className='review-container'>
        <div className='review__item'>
          <div className='review__item--header'>
            <img
              src={
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
              }
              className='review__avatar'
            />
            <h4 className='review__username'>
              <span className='review__dark--text'>@</span>John_2_Smith
            </h4>
          </div>
          <div className='review__text-wrapper'>
            <p className='review__text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              numquam ipsum provident voluptate similique aspernatur corrupti
              eveniet facere ratione placeat. Sit, molestias cum? Modi repellat
              impedit rerum, eius ea ut.
            </p>
          </div>
        </div>
        <div className='review__item'>
          <div className='review__item--header'>
            <img
              src={
                'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
              }
              className='review__avatar'
            />
            <h4 className='review__username'>
              <span className='review__dark--text'>@</span>Sarah_Jones229
            </h4>
          </div>
          <div className='review__text-wrapper'>
            <p className='review__text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              numquam ipsum provident voluptate similique aspernatur corrupti
              eveniet facere ratione placeat. Sit, molestias cum? Modi repellat
              impedit rerum, eius ea ut.
            </p>
          </div>
        </div>
        <div className='review__item'>
          <div className='review__item--header'>
            <img
              src={
                'https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
              }
              className='review__avatar'
            />
            <h4 className='review__username'>
              <span className='review__dark--text'>@</span>JessicaBaker809
            </h4>
          </div>
          <div className='review__text-wrapper'>
            <p className='review__text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              numquam ipsum provident voluptate similique aspernatur corrupti
              eveniet facere ratione placeat. Sit, molestias cum? Modi repellat
              impedit rerum, eius ea ut.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
