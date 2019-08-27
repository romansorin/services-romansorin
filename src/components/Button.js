import React, { Component } from 'react'

export default class Button extends Component {
  render () {
    const { children, styles } = this.props

    return (
      <button className={`inline-flex items-center ${styles}`} {...this.props}>
        {children}
      </button>
    )
  }
}
