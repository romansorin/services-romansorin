import React, { Component } from 'react'

export default class Background extends Component {
  render() {
    const { children } = this.props
    return <div {...this.props}>{children}</div>
  }
}
