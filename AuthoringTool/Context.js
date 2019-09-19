import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productName: 'Tom'
    }
  }

  onInputChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <Context.Provider value={{
        data: this.state,
        actions: {
          onInputChange: this.onInputChange.bind(this)
        }
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;