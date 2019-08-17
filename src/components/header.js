import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
// import '../sass/colors.scss'

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <Link to="/" className="header-brand">
      {siteTitle}
    </Link>
    <nav className="header-items">
      <ul className="horizontal-list list-unstyled">
        <Link to="/" className="list-item text-decoration-none">
          Text 1
        </Link>
        <Link to="/" className="list-item text-decoration-none">
          Text 2
        </Link>
      </ul>
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
