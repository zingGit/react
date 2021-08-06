import './App.css';

import React, { Component } from 'react';

import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:3001';

export default class App extends Component {


  render() {

    return (
      <div className = "App">
        <h1> 嘻嘻嘻 </h1>
        <button onClick = {this.onGetAllUser}> onGetAllUser </button>
        <br/>
        <br/>
        <br/>
        <button onClick = {this.onGetUser}> onGetUser </button>
        <br/>
        <br/>
        <br/>
        <button onClick = {this.onCreateUser}> onCreateUser </button>
        <br/>
        <br/>
        <br/>
        <button onClick = {this.onUpdateUser}> onUpdateUser </button>
        <br/>
        <br/>
        <br/>
        <button onClick = {this.onRemoveUser}> onRemoveUser </button>
        <br/>
        <br/>
        <br/>

      </div>)
  }


  /**
   * get 传参 需要放params 里 post 直接传对象
   */
  onGetAllUser = e => {

    axios.get("/user/getAll", {
      params: {
        ID: 1,
        Name: "zing",
        Age: 18
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
  
  onGetUser = e => {
    
    axios.post('/user/getUser', {
        ID: 1,
        Name: "zing",
        Age: 18
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  onCreateUser = e => {

    axios.post('/user/createUser', {
      params: {
        ID: 1,
        Name: "zing",
        Age: 18

      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log()

  })

  
  }

  onUpdateUser = e => {

    axios.post('/user/updateUser', {
      params: {
        ID: 1,
        Name: "uzing",
        Age: 188

      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log()

    })
  }

  onRemoveUser = e => {

    axios.post('/user/removeUser', {
      params: {
        ID: 1,
        Name: "zing",
        Age: 18

      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log()

    })
  }

}
