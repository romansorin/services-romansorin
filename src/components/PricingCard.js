import React, { Component } from 'react'

import {Button} from './index'

export default class PricingCard extends Component {
  render() {
    const { name, price, details, buttonText, buttonClasses, children, classes } = this.props
    return (
      <div className={`bg-softwhite max-w-md rounded overflow-hidden shadow-lg ${classes}`}>
        <div className="px-8 py-12">
          <h3 className="font-medium font-display tracking-wide text-blackish text-2xl -mb-1">{name}</h3>
          <h3 className="font-medium tracking-wide font-display text-themeDarkBlue text-3xl mb-2">{price}</h3>
          <p className="py-4 my-4 border-t border-lightestgrey leading-looser font-regular border-b text-lightergrey text-xs">
            {children}
          </p>
          <Button >{buttonText}</Button>
        </div>
      </div>
    )
  }
}
