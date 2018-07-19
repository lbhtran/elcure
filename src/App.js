import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        Your Timeline
        </header>
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
            <p> The start of leukaemia!</p>
          </li>
          <li id="#day1">
            <img src="images/2.png" width="100" height="100" />
            <p>Informing HR about my illness</p>
        <img src="images/1.png" width="100" height="100" />
            <p>My 2nd day as a leukaemia patient!</p>
          </li>
          <li id="#day2">
            <img src="images/3.png" width="100" height="100" />
            <p>Start of treatment!</p>
            <img src="images/4.png" width="100" height="100" />
            <p>Breaking the news about illness to my friends</p>
          </li>
          <li id="#day3">
            <img src="images/4.png" width="100" height="100" />
            <p>Life must go on! Went to the Wimbledon</p>
          </li>
          <li id="#day4">
          </li>
          <li id="#day5">
          </li>
          <li id="#day6">
          <img src="images/5.png" width="100" height="100" />
            <p>My activities on day 4</p>
        <img src="images/1.png" width="100" height="100" />
            <p>Things to keep in mind when going on a holiday</p>
          </li>
          <li id="#day7">
            <img src="images/4.png" width="100" height="100" />
            <p>My diet plan</p>
          </li>
          <li id="#day8">
          </li>
          <li id="#day9">
            <img src="images/5.png" width="100" height="100" />
            <p>Life must go on! My first night out after being diagnosed</p>
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
