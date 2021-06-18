// Code DigitalClicker Component Here
import React, {useState} from "react"

export default function DigitalClicker(){

  let [timesClicked, setClicked] = useState(0)
  return(
    <button onClick={this.handleClick}>{this.state.timesClicked}</button>
  )
}
