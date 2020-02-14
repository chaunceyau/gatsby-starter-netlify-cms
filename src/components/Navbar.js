import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: 'hidden',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: '',
          })
          : this.setState({
            navBarActiveClass: 'hidden',
          })
      }
    )
  }

  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap py-6">
        <div className="flex items-center flex-shrink-0 mr-6">
          <span className="font-semibold text-xl tracking-tight">AUSTIN CHAUNCEY</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded border-black hover:text-red-500 hover:border-red-500" onClick={this.toggleHamburger}>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:text-right ${this.state.navBarActiveClass}`}>
          <div className="text-sm lg:flex-grow">
            <Link to='/blog' className="block mt-4 lg:inline-block lg:mt-0 hover:text-red-500 mr-4">
              Blog
            </Link>
            <Link className="block mt-4 lg:inline-block lg:mt-0 hover:text-red-500 mr-4">
              Projects
            </Link>
            <Link className="block mt-4 lg:inline-block lg:mt-0 hover:text-red-500 mr-4">
              Talks
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
