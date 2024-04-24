import React from 'react'
import '../Style/Css/layout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faImage } from '@fortawesome/free-solid-svg-icons'

import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import SearchInput from '../components/SearchInput'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchResults, setDisplay } from '../store/searchSlice'

// React Lazy Load Image Component
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function Layout() {
  const search = useSelector((state) => state.search.searchValue)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const hundelSubmite = (e) => {
    e.preventDefault()
    if (search) {
      navigate('/search')
      dispatch(setDisplay(true))
      dispatch(getSearchResults(search))
    }
  }

  return (
    <>
      <div className="header">
        <div className="logo">
          <NavLink to="/">
            <LazyLoadImage src={require('../Images/1.png')} alt="ShaToT Search" effect="blur" />
          </NavLink>
        </div>
        <div className="search-bar">
          <form
            onSubmit={(e) => {
              hundelSubmite(e)
            }}
          >
            <SearchInput>
              <button className="btn-search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </SearchInput>
          </form>
        </div>
      </div>

      <div className="nav-bar">
        <div className="container">
          <ul className="linkList">
            <NavLink to="/search" end>
              <li>
                <FontAwesomeIcon icon={faMagnifyingGlass} /> All
              </li>
            </NavLink>
            <NavLink to="/search/images">
              <li>
                <FontAwesomeIcon icon={faImage} /> Images
              </li>
            </NavLink>
          </ul>
        </div>
      </div>

      <div className="search-reasult">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
