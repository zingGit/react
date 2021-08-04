import './App.css';

import React, { Component } from 'react';

import axios from 'axios'



export default class App extends Component {


  render() {

    return (
      <div className = "home">
        <h1> 嘻嘻嘻 </h1>
        <button onClick = {this.onButton1}> btn_1</button>
        <br/>
        <br/>
        <br/>
        <button onClick = {this.onButton2}> btn_2</button>
        <br/>
        <br/>
        <br/>
        <button onClick = {this.onButton3}> btn_3</button>
        <br/>
        <br/>
        <br/>

      </div>)
  }


  onButton1 = e => {
    console.log("butron click 1")

    
    // 上面的请求也可以这样做
    axios.get("http://localhost/3001", {
     
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
  
  onButton2 = e => {
    
    console.log("butron click 2")
    
    
    // 上面的请求也可以这样做
    axios.get('http://localhost/3001/user', {
      params: {
        ID: 12345
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  onButton3 = e => {
    console.log("butron click 3")


    axios.post('http://localhost/3001/user', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log()

  })
  }
}
