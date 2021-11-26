import React from "react";
export default class Greetcls extends React.Component {
    constructor(props){
        super(props);
        console.log("Props is ", props);
        console.log("Name is ", this.props.name)
    }
    render(){
        return <h2> I am {this.props.name}</h2>
    }
}

const Greet = (props) => {
    return <h2> Hello {props.name}</h2>
}
export  {Greet}