import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
      <div id="timeline">
        <ul id="dates">
          <li><a href="#day0">Day 0</a></li>
          <li><a href="#day1">Day 1</a></li>
          <li><a href="#day2">Day 2</a></li>
          <li><a href="#day3">Day 3</a></li>
          <li><a href="#day4">Day 4</a></li>
          <li><a href="#day5">Day 5</a></li>
          <li><a href="#day6">Day 6</a></li>
          <li><a href="#day7">Day 7</a></li>
          <li><a href="#day8">Day 8</a></li>
          <li><a href="#day9">Day 9</a></li>
        </ul>
        <ul id="issues">
          <li id="#day0">
            <img src="images/11.jpg" width="100" height="100" />
            <p>Unfortunately, I was diagnosed with leukaemia today :(.</p>
            <img src="images/1.PNG" width="100" height="100" />
            <p>  .</p>
          </li>
          <li id="#day1">
            <img src="images/2.png" width="100" height="100" />
            <p>Donec semper quam scelerisque tortor dictum gravida.</p>
          </li>
          <li id="#day2">
            <img src="images/3.png" width="100" height="100" />
            <p>Donec semper quam scelerisque tortor dictum gravida.</p>
          </li>
          <li id="#day3">
            <img src="images/4.png" width="100" height="100" />
            <p>Donec semper quam scelerisque tortor dictum gravida.</p>
          </li>
          <li id="#day4">
          </li>
          <li id="#day5">
            <img src="images/5.png" width="100" height="100" />
            <p>Donec semper quam scelerisque tortor dictum gravida.</p>
          </li>
          <li id="#day6">
            <img src="images/6.png" width="100" height="100" />
            <p>Donec semper quam scelerisque tortor dictum gravida.</p>
          </li>
          <li id="#day7">
          </li>
          <li id="#day8">
          </li>
          <li id="#day9">
            <img src="images/8.png" width="100" height="100" />
            <p>Donec semper quam scelerisque tortor dictum gravida.</p>
          </li>
      </ul>
      <div id="grad_left"></div>
      <div id="grad_right"></div>
      <a href="#" id="next">+</a>
      <a href="#" id="prev">-</a>
      </div>
    </div>
    );
  }
}

export default App;
