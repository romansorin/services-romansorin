import React, { Component } from 'react'

export default class Background extends Component {
  render() {
    const { backgroundColor, children } = this.props
    return (
      <div className={`${backgroundColor}`} {...this.props}>
        {children}
      </div>
    )
  }
}
