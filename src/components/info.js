import React from 'react';

class Info extends React.Component{
    render()    {
        return(
        <div className='info'>
            <h2 className="name">{this.props.name}</h2>
            <p className="name">{this.props.artist}</p>
            <div className='album_year'>
            <p>{this.props.album}</p>
            <p>({this.props.year})</p>
            </div>
        </div>
        );
    }
}

export default Info;