import React, { Component } from 'react'

export default class ButtonLink extends Component {
  render () {
    const { children, styles, link } = this.props

    return (
      <a
        href={link}
        className={`inline-flex items-center ${styles}`}
        {...this.props}
      >
        {children}
      </a>
    )
  }
}
