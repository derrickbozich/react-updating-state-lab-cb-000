// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component{
  constructor(){
    super();
    this.state = {
      js { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
    }

    handleEvent = event => {
      this.setState({
        timesClicked++
      })
    }
  }

  render(){
    return(
      <button className="Bitrate" onClick={this.handleEvent}>{this.state.timesClicked}</button>
    )
  }
}
