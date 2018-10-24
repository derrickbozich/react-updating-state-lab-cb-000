// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component{
  constructor(){
    super();
    this.state = {
       errors: [],
       user: null,
       settings: {
         bitrate: 8,
         video: {
           resolution: '1080p'
         }
       }
    }
  }
  bitrate = () => {
    this.setState({
      errors:["hi"]
    })
  }

  render(){
    return(
      <button className="bitrate" onClick={this.bitrate}>Bitrate</button>
    )
  }
}
