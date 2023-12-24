import React from 'react';
import './Cards.css';
import CardItem from './CardItem.js';

function Cards() {
  return (
    <div className='cards'>
      <h1> Your Path to Success Starts Here: Tour Our Website Features </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/study room.png'
              text='Join Study rooms - Study Together, Even from Afar'
              path='/services'
            />
            <CardItem
              src='images/translate.jpg'
              text='Study Globally, Communicate Locally'
              path='/services'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
