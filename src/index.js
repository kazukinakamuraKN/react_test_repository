import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Radius(props) {
  return (
    <div className="radius">
    </div>
  )
}

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
      x: 0, y: 0, countRadius: 0
    }
  }

  onClick(e){
    const countRadius = this.state.countRadius + 1
    console.log("countRadius=" + countRadius)
    this.setState({
      x:e.pageX, y: e.pageY, countRadius: countRadius
    })
    console.log(e.pageX + ":" + e.pageY)
  }

  render(){
      const left = this.state.x + "px"
      const top = this.state.y + "px"
    const radiusStyle = {
      top: top,
      left: left,
      position: "relative"
    }
    console.log(radiusStyle)

    return(
      <div onClick={(e) => this.onClick(e)}>
        <div className="screen" style={radiusStyle}>
            <Radius/>
        </div>
      </div>
    )
  }
}
  
ReactDOM.render(
  <Bye />,
  document.getElementById('root')
);