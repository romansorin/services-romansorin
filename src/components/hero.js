import { Link } from 'gatsby'
import React, { Component } from 'react'

export default class Hero extends Component {
  render () {
    const { title, subtitle, children } = this.props
    return (
      <div className='container mt-32 mx-auto w-100'>
        <h1 className='text-softwhite font-display font-semibold text-center mb-2 text-5xl'>
          {title}
        </h1>
        <h2 className='text-softwhite mb-5 font-display font-light text-center text-3xl'>
          {subtitle}
        </h2>
        {children}
      </div>
    )
  }
}
