import React from 'react'
import '../Style/Css/home.css'
import SearchInput from '../components/SearchInput'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getSearchResults, setDisplay } from '../store/searchSlice'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

// React Lazy Load Image Component
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function Home() {
  const navigate = useNavigate()
  const search = useSelector((state) => state.search.searchValue)
  const dispatch = useDispatch()

  const hundelSubmite = (e) => {
    e.preventDefault()
    if (search) {
      dispatch(getSearchResults(search))
      dispatch(setDisplay(true))
      navigate('/search')
    }
  }
  return (
    <div className="app">
      <div className="container">
        <LazyLoadImage src={require('../Images/1.png')} alt="ShaToT Search" effect="blur" />
        <div className="search">
          <form
            onSubmit={(e) => {
              hundelSubmite(e)
            }}
          >
            <SearchInput />

            <button className="btn_search" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="copywrite">
        <div className="container">
          <p className="text">
            © Copyright 2023{' '}
            <a
              className="whatsapp"
              href="https://api.whatsapp.com/send/?phone=0201110649108&text=Welcome+I%27m+Ahmed+Samy&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              Ahmed Samy
            </a>
          </p>
          {/* <div className="contact">
            <a
              href="https://www.linkedin.com/in/ahmedsamyop"
              target={'_blank'}
              rel="noreferrer"
              style={{ color: '#0a66c2' }}
            >
              <div className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </a>
            <a
              href="https://github.com/ahmedsamyop"
              target={'_blank'}
              rel="noreferrer"
              style={{ color: '#333' }}
            >
              <div className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </a>
            <a
              href="https://twitter.com/ahmedsamyop"
              target={'_blank'}
              rel="noreferrer"
              style={{ color: '#1da1f2' }}
            >
              <div className="icon">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Home
