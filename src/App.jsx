import React, { Component } from 'react'
import CourseCard from './CourseCard';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {courses:[
      {name:"Data Structure and Algorithms",duration:"40hrs",price:"Rs 12000", img:"DSA.jpg"},
      {name:"React JS",duration:"30hrs",price:"Rs 1000", img:"React.jpg"},
      {name:"Java Programming",duration:"35hrs",price:"Rs 1500", img:"Java.jpg"},
      {name:"Machine Learning",duration:"50hrs",price:"Rs 3000", img:"ML.jpg"},
    ]}
  }
  render() {
    const {courses} = this.state;
    return (
      <div>
        <div className='app'>
          <div className='header'>COURSE CATALOG</div>
          <div className='Section'>
            {courses.map((data)=>(
              <CourseCard data ={data}/>
            ))}
          </div>
          <div className='footer'>© Copyright 2026. All rights reserved. - Rakshit</div>
        </div>
      </div>
    )
  }
}
