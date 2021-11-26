import React from 'react'
class Mountphase extends React.Component{
  constructor(props){
    super(props)
    console.log("constructor is called")
  }
  render(){
    console.log("render is called");
    return(<h1> Mount Phase</h1>)
  }
  componentDidMount(){
    console.log("component Did Mount is called");
  }
  }
export default Mountphase;

