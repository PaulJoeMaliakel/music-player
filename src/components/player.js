import React from 'react';
import play from '../play-button.png';
import pause from '../pause-button.png';

class Player extends React.Component{

   
    render()    {
       
        return(
           <div>
            <div className='control'>
                <img src={this.props.playStatus?play:pause}className='button' alt='pic' onClick={this.props.togglePlay}/>
             </div>   
                <div className='play_time'>

                <p>{this.props.currentTime}</p>
                <div className="timeline" ref={(timeline) =>{this.timeline=timeline}}>

                <div className="handle" ref={(handle) => {this.handle=handle}}/>
                </div>
                <p>{this.props.duration}</p>
                </div>
            

            </div>

            
        
        );
    }
}

export default Player;