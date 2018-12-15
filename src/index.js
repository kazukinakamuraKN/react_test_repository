import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Name(props) {
  return (
    <div>
      {props.name}
    </div>
  )
}

class Hello extends React.Component{
  render(){
    const text = this.props.text;
    return (
      <Name name={text}/>
    );
  }
}

class Bye extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      x: 0, y: 0, countRadius: 0,click: false
    }
  }

  onMouseDown(e){
    const countRadius = this.state.countRadius + 1
    console.log("countRadius=" + countRadius)
    this.setState({
      x:e.pageX, y: e.pageY, countRadius: countRadius, click: true
    })
    console.log("onMousedown" + e.pageX + ":" + e.pageY)
  }

  onMouseUp(e) {
    this.setState({
      x:e.pageX, y: e.pageY,click: false
    })
    console.log("mouseUP")
  }

  onMouseOver(e) {
    if(this.state.click === true){
      this.setState({
        x:e.pageX, y: e.pageY
      })
    }
    console.log("mouseover : " + e.pageX + ":" + e.pageY)
  }

  onDragEnd(e) { 
    this.setState({
    })
    console.log("dragOff")
  }

  render(){
      const left = this.state.x + "px"
      const top = this.state.y + "px"
    const radiusStyle = {
      top: top,
      left: left,
      position: "relative",
      transitionProperty: "all",
      transitionDuration: "2s"
    }
    console.log(radiusStyle)

    return(
      <div className="outer" onMouseDown={(e) => this.onMouseDown(e)} onMouseUp={(e) => this.onMouseUp(e)} onMouseOver={(e) => this.onMouseOver(e)} onDragEnd={(e) => this.onDragEnd(e)}>
        <div className="screen" style={radiusStyle}/>
      </div>
    )
  }
}
  
ReactDOM.render(
  <Bye />,
  document.getElementById('root')
);