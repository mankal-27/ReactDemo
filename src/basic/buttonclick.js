import React from 'react'
export default class SayHello extends React.Component{
    constructor(props) {
        super(props);
        this.name = null;
        console.log("Name is ", this.name);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.name = "Manjunath"
        console.log("Name is ", this.name);
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                click Me For Reflecting Your Name
            </button>
        )
    }
}

export const Hellofn = (props) => {
    var name = null;
    console.log(props.msg);

    const handleClick = () => {
        name = "kuku"
        alert(name);
    }

    return (
        <button onClick ={handleClick}> Click Me bro</button>
    );
};