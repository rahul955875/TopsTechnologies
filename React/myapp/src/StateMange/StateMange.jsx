import React from "react";
class StateEx extends React.Component{
constructor(){
    super()
    this.state = {lang : 'javaScript'}
    this.handletEvent = this.handletEvent.bind(this)
}
handletEvent(){
    this.setState({lang:'python'})
}
render(){
    return (
        <>
        <button onClick={this.handletEvent}>click</button>
        <p>{this.state.lang}</p>
        </>
    )
}
}
export default StateEx