import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import track from './tracks';
import Pic from './components/pic';
import Info from './components/info';
import Player from './components/player';
class App extends Component {
 state=  {
   
   playStatus:true,
   currentTime: 0
   
 }
 convertTime=(timestamp)=> {
  let minutes = Math.floor(timestamp / 60);
let seconds = timestamp - (minutes * 60);
  if (seconds < 10) { seconds = '0' + seconds; }
  timestamp = minutes + ':' + seconds;
  return timestamp;
}
 updateTime=(timestamp)=> {
  timestamp = Math.floor(timestamp);
  this.setState({ currentTime: timestamp });
}
    
    togglePlay=() =>{
       if(this.state.playStatus===true) {
        this.audio.play();
       
        this.updateTime( this.convertTime(this.props.currentTime))

        this.setState({ playStatus: false});
        console.log(this.state.playStatus);
        
      } else {
        this.audio.pause();
        this.convertTime(this.props.currentTime)
        this.updateTime(this.props.currentTime)


        this.setState({ playStatus: true});
        console.log(this.state.playStatus);

      }
    }
  render() {
    return (
      <div className='app'>
      <div className='player ' >
        <div className="Background" style={{'backgroundImage':'url('+ track.artwork + ')'}}></div>
        <Header  />
        <Pic pic={track.artwork} className='pic'/>
        <Info name={track.name} artist={track.artist} album={track.album} year={track.year}/>
        <audio src={track.source}         ref={(audio) => { this.audio = audio } }/>

        <Player playStatus={this.state.playStatus} currentTime={this.state.currentTime} duration={this.convertTime(track.duration)} source={track.source} togglePlay={this.togglePlay}/>
      </div>
    </div>
    );
  }
}

export default App;
