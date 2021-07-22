import React, { Component } from 'react';
import axios from 'axios';
import './App.css'
import MovieCars from './comonents/MovieCards';
import preloader from './preloader.gif';

class App extends Component{
  constructor(){
    super();
    this.state={
      movies:[],
      loader:true
    }
  }
  componentDidMount(){
    axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
          .then(res=>this.setState({movies:res.data.Search,loader:false}));
  }
  render(){
    const {loader,movies}=this.state
    return(
      <div>
        {loader?<div style={{textAlign:"center",marginTop:"45vh"}}><img src={preloader} alt="loader"/></div>:
        <div className="d-flex flex-wrap card-wraper">{movies && movies.map((items)=>(<MovieCars {...items}/>))}</div>}
      </div>
    )
  }
}

export default App;