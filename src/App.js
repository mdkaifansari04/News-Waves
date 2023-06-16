
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY 
  constructor() {
    super()
    this.state = {
      mode: "light",
      icon: "moon",
      progress : 10
    }
  }
  toggleMode = () => {
    if (this.state.mode === 'light') {
      this.setState({
        mode: 'dark',
        icon: 'sun'
      })
      document.body.style.backgroundColor = "#000000";
    } else {
      this.setState({
        mode: 'light',
        icon: 'moon',
      })
      document.body.style.backgroundColor = "#ffffff";
    }
  }
  setProgress = async (passedProgress) =>{
      this.setState({
        progress : passedProgress,
      })
  }
  render() {
    return (
      <Router>
        <LoadingBar
          height={3}
          color='#7c65bc'
          progress={this.state.progress}
        /> 
        <Navbar toggleMode={this.toggleMode} state={this.state} />
        <Routes>
          <Route path={`/`} element={<News apiKey = {this.apiKey} key={'general'} setProgress={this.setProgress} modeState={this.state} pageSize={8} country={"in"} category={"general"} heading={'Top Headlines'} />} />
          <Route path={`/business`} element={<News apiKey = {this.apiKey} key={'business'} setProgress={this.setProgress} modeState={this.state} pageSize={8} country={"in"} category={"business"} heading={'Business'} />} />
          <Route path={`/entertainment`} element={<News apiKey = {this.apiKey} key={'entertainment'} setProgress={this.setProgress} modeState={this.state} pageSize={8} country={"in"} category={"entertainment"} heading={'Entertainment'} />} />
          <Route path={`/health`} element={<News apiKey = {this.apiKey} key={'health'} setProgress={this.setProgress} modeState={this.state} pageSize={8} country={"in"} category={"health"} heading={'Health'} />} />
          <Route path={`/science`} element={<News apiKey = {this.apiKey} key={'science'} setProgress={this.setProgress} modeState={this.state} pageSize={8} country={"in"} category={"science"} heading={'Science'} />} />
          <Route path={`/sports`} element={<News apiKey = {this.apiKey} key={'sports'} setProgress={this.setProgress} modeState={this.state} pageSize={8} country={"in"} category={"sports"} heading={'Sports'} />} />
          <Route path={`/technology`} element={<News apiKey = {this.apiKey} key={'technology'} setProgress={this.setProgress} modeState={this.state} pageSize={8} country={"in"} category={"technology"} heading={'Technology'} />} />
        </Routes>
      </Router>
    )
  }
}