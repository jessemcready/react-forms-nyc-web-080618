// Code ControlledInput Component Here
import React, {Component} from 'react'

export default class ControlledInput extends Component {
    // state = {
    //   firstName: "John",
    //   lastName: "Henry"
    // }
    //
    // handleFirstNameChange = event => {
    //   this.setState({
    //     firstName: event.target.value
    //   })
    // }
    //
    // handleLastNameChange = event => {
    //   this.setState({
    //     lastName: event.target.value
    //   })
    // }
    //
    // handleSubmit = event => {
    //   event.preventDefault()
    //   const firstName = event.target.children[0].value
    //   const lastName = event.target.children[1].value
    //   console.log(firstName, lastName)
    // }
    //
    // render() {
    //   return (
    //     <form onSubmit={event => this.handleSubmit(event)}>
    //       <input type="text" id="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
    //       <input type="text" id="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
    //       <input type="submit" />
    //     </form>
    //   )
    // }
    state = {
      value: '',
    }

    handleChange = event => {
      this.setState({
        value: event.target.value,
      });
    }

    handleSubmit = event => {
      event.preventDefault()
      this.sendFormDataSomewhere(this.state)
    }

    render() {
      return (
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      );
    }
}
