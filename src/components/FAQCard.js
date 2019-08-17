import React, { Component } from 'react'

import Button from './Button'

export default class FAQCard extends Component {
  render() {
    const { name, price, details, buttonText } = this.props
    return (
      <div
        className="max-w-sm rounded-lg mx-auto shadow-xl bg-white"
        {...this.props}
      >
        <h4>{name}</h4>

        <h4>${price}/month</h4>
        <p>{details}</p>
        <Button>{buttonText}</Button>
      </div>
    )
  }
}
