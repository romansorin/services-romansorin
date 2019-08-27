import React, { Component } from 'react'

import { ButtonLink } from './index'

export default class PricingCard extends Component {
  render () {
    const {
      name,
      price,
      buttonText,
      buttonClasses,
      children,
      link,
      classes
    } = this.props

    const styles = {
      ...this.props.styles,
      width: '310px'
    }

    return (
      <div
        className={`bg-softwhite px-10 py-10 rounded-sm overflow-hidden pricing-card ${classes}`}
        style={styles}
      >
        <h3 className='font-medium standard font-display tracking-wide text-blackish text-2xl -mb-1'>
          {name}
        </h3>
        <h3 className='font-semibold tracking-wide font-display text-themeDarkBlue text-2.5xl mb-2'>
          {price}
        </h3>
        <p
          style={{ fontSize: '0.85rem' }}
          className='h-48 pb-2 pt-3 mb-6 mt-5 border-t border-lightestgrey leading-looser font-medium border-b text-lightergrey text-xs'
        >
          {children}
        </p>
        <ButtonLink
          link={link}
          styles={`border rounded py-2 px-5 text-sm shadow-md font-semibold tracking-wider ${buttonClasses}`}
        >
          {buttonText}
        </ButtonLink>
      </div>
    )
  }
}
