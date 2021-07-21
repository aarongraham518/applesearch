import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const api = axios.create({
  baseURL: `https://itunes.apple.com/search?term="Mike&limit=5`
})

class App extends Component{  

  // state = {
  //   details: []
  // }
  constructor(){
    super();
    this.state = {
      details: []
    }
    
    api.get('/').then(res => {
      // console.log(res.data)
      this.setState({details: res.data})
    })
  }

  componentDidMount(){
    
  }
  render(){
    
    return (
      <div className="App">
        <h1>Testing</h1>
        {this.state.details.map(detail => <h2>hi there</h2>)}
      </div> 
    );
  }
}

export default App;
