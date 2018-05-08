import React from 'react';

class Pic extends React.Component{
    render()    {
        return(
        <div className="pic-container" >
            <img src={this.props.pic} alt="pic" className='pic'/>
        </div>
        );
    }
}

export default Pic;