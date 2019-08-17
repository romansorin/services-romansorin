import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const { children } = this.props
    return (
      <button
        className="bg-gray-900 text-white font-bold py-2 px-4 rounded"
        {...this.props}
      >
        {children}
      </button>
    )
  }
}
