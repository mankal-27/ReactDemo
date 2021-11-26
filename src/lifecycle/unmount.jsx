import React from 'react'

class Msg extends React.Component {

  render() {

    return (

      <div>

        <p>{this.props.message}</p>

        <button onClick={() => this.props.removeItem(this.props.id)}>

          Remove me

        </button>

      </div>

    );

  }

  componentWillUnmount() {

    console.log("Component Will UnMount from MSG Component");

    console.log('Removing item', this.props.message);

  }

}

export default class UnMount extends React.Component {

  constructor(props) {

    super(props);

    console.log("Constructor");

    this.state = {

      list: [

        { id: 1, message: 'God' },

        { id: 2, message: 'is' },

        { id: 3, message: 'Almighty' },

      ]

    };

  }

  removeItem(id) {

    const newList = this.state.list.filter(item => item.id !== id);

    this.setState({ list: newList });

  }

  render() {

    return (

      <div className="App">

        <h1>My Items</h1>

        {this.state.list.map(item => (

          <Msg

            key={item.id}

            id={item.id}

            message={item.message}

            removeItem={this.removeItem.bind(this)}

          />

        ))}

      </div>

    );

  }

}




