// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component{
  constructor(){
    super();
    this.state = {
      js { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
    }

    bitrate = () => {
      this.setState({
        timesClicked++
      })
    }
  }

  render(){
    return(
      <button className="bitrate" onClick={this.bitrate}></button>
    )
  }
}
