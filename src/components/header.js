import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import {Button} from './index'

const Header = ({ siteTitle }) => (
  <header>
    <nav className="font-body container flex items-center mx-auto justify-between flex-wrap bg-transparent py-6">
      <Link to="/">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            {siteTitle}
          </span>
        </div>
      </Link>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-700 border-gray-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block lg:flex lg:items-center lg:w-auto">
        <div className="text-base lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 font-medium tracking-wide lg:inline-block lg:mt-0 text-white hover:text-white mr-12"
          >
            Contact
          </a>
          <Button styles="text-base rounded px-3 py-2 leading-none tracking-wide border font-semibold text-darkgrey bg-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white shadow-lg mt-4 lg:mt-0">
            <span className="mr-2">Get Started</span>
            <svg
              className="fill-current relative w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                className="heroicon-ui"
                d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"
              />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
