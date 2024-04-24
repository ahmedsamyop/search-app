import React, { useEffect } from 'react'
import '../Style/Css/allSearch.css'
import DisplayLoading from '../components/DisplayLoading'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// React Lazy Load Image Component
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function AllSearch() {
  let fetchResults
  const { results, isloaded, isErorr, display, searchValue } = useSelector(
    (state) => state.search,
  )
  const navigate = useNavigate()
  if (results.items) {
    fetchResults = results.items.map((ele) => {
      return (
        <div className="result" key={ele.cacheId + ele.title}>
          <a className="link" href={ele.link} target={'_blank'} rel="noreferrer">
            <div className="url-string">{ele.link}</div>
            <span className="title" dangerouslySetInnerHTML={{ __html: ele.htmlTitle }} />
            <div className="snippet">
              {ele?.pagemap?.cse_thumbnail && (
                <LazyLoadImage
                  src={ele.pagemap.cse_thumbnail[0]?.src}
                  alt={ele.title}
                  effect="blur"
                />
              )}
              <span dangerouslySetInnerHTML={{ __html: ele.htmlSnippet }} />
            </div>
          </a>
        </div>
      )
    })
  }

  useEffect(() => {
    if (!searchValue) {
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      {display && (
        <DisplayLoading isloaded={isloaded} isErorr={isErorr}>
          <div className="all-search">
            <div className="container">
              {results.searchInformation && (
                <div className="result-stats">
                  About {results.searchInformation.formattedTotalResults}
                  results ({results.searchInformation.formattedSearchTime} seconds)
                </div>
              )}
              <div className="result-container">{fetchResults}</div>
            </div>
          </div>
        </DisplayLoading>
      )}
    </>
  )
}

export default AllSearch
