import './App.css';

import React, { Component } from 'react';

import axios from 'axios'
// import Axios from "./utils/Axios"


axios.defaults.baseURL = 'http://localhost:3001';

export default class App extends Component {

  ws = null
  componentDidMount() {
  }

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
        <button onClick = {this.onCreate}> onCreate </button>
        <br/>
        <br/>
        <br/>
        <button onClick = {this.onRemove}> onRemove </button>
        <br/>
        <br/>
        <br/>
        <button onClick = {this.onFindAll}> onFindAll </button>
        <br/>
        <br/>
        <br/>
        <button onClick = {this.onFindOne}> onFindOne </button>

        <br/>
        <br/>
        <button onClick = {this.onConnect}> connect </button>
        <br/>
        <br/>
        <br/>
        <button onClick = {this.onEmit}> send </button>

        <div> ---------------------------------------</div>


        <button onClick ={this.setKey}>set</button>
        <br></br>
        <br></br>
        <br></br>

        <button onClick={this.getKey}> get</button>
      </div>)
  }

  setKey = ()=> {
    axios.post('/redis/set', {
        key: "newkeys",
        value: "iiiiiiiiiisssssssssssssss"
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log()

  })

  }

  getKey = ()=> {

    axios.post('/redis/get', {
        key: "newkeys"
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
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
        ID: 1,
        Name: "zing",
        Age: 18
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
      ID: 1,
      Name: "zing",
      Age: 18
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
      ID: 1,
      Name: "zing",
      Age: 18
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log()

    })
  }


  //-----------------database-------------

  onCreate = e => {
    
    axios.post('/database/create', {
      ID: 1,
      Name: "zing222333",
      Age: 18
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log()

    })
    
  }
  onRemove = e => {

    
    axios.post('/database/remove', {
      ID: 25,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log()

    })
  }
  onFindAll = e => {
    
    axios.post('/database/findAll', {
   
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log()

    })

  }
  onFindOne = e => {
    
    axios.post('/database/findOne', {
      ID: 25,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log()

    })

  }

  //---------ws----------

  onConnect = e=> {

    console.log('Connected');
    const socket = this.socket = new WebSocket('ws://localhost:3003');

    socket.onopen = function() {
      console.log('socket onopen');
    
      socket.onmessage = function(data) {
        console.log("onmessage:",data);
      };
    };


  }

  onEmit = e=> {
    console.log('socket send');
    this.socket.send(
      JSON.stringify({
        event: 'events',
        data: 'test',
      }),
    );
  }

}
