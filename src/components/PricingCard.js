import React, { Component } from 'react'

import Button from './Button'

export default class PricingCard extends Component {
  render() {
    const { name, price, details, buttonText } = this.props
    return (
      <div className="max-w-md rounded overflow-hidden shadow-lg">
        <div className="px-12 py-12">
          <h3 className="font-bold text-xl mb-2">The Coldest Sunset</h3>
          <h3 className="font-bold text-xl mb-2">The Coldest Sunset</h3>
          <p className="border-t border-b text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
          <Button>CLICK ME</Button>
        </div>
      </div>
    )
  }
}
