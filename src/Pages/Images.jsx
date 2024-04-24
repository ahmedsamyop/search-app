import React, { useEffect } from 'react'
import '../Style/Css/imagesSearch.css'
import DisplayLoading from '../components/DisplayLoading'
import { useSelector, useDispatch } from 'react-redux'
import { getSearchResultsImages, setDisplay } from '../store/searchSlice'
import { useNavigate } from 'react-router-dom'
// React Lazy Load Image Component
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function Images() {
  let fetchResultsImages
  const { searchValue, resultsImages, isloaded, isErorr, display } = useSelector(
    (state) => state.search,
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (resultsImages.items) {
    console.log(resultsImages)
    fetchResultsImages = resultsImages.items.map((ele) => {
      return (
        <div className="image-box" key={ele.title + ele.link}>
          <a href={ele.link} target={'_blank'} rel="noreferrer" className="image">
            {/* <img src={ele.link} alt={ele.title} /> */}
            <LazyLoadImage src={ele.link} alt={ele.title} effect="blur" />
          </a>
          <div className="title" dangerouslySetInnerHTML={{ __html: ele.htmlTitle }} />
          <a href={ele.image.contextLink} className="snippet" target={'_blank'} rel="noreferrer">
            Web Link &#8594;
          </a>
        </div>
      )
    })
  }

  useEffect(() => {
    if (searchValue !== '') {
      if (!resultsImages.items) {
        dispatch(setDisplay(true))
        dispatch(getSearchResultsImages(searchValue))
      }
    } else {
      navigate('/')
    }
  }, [searchValue, dispatch, resultsImages.items, navigate])

  return (
    <>
      {display && (
        <DisplayLoading isloaded={isloaded} isErorr={isErorr}>
          <div className="images-search">
            <div className="container">
              {resultsImages.searchInformation && (
                <div className="result-stats">
                  About {resultsImages.searchInformation.formattedTotalResults}
                  results ({resultsImages.searchInformation.formattedSearchTime} seconds)
                </div>
              )}
              <div className="container-results">{fetchResultsImages}</div>
            </div>
          </div>
        </DisplayLoading>
      )}
    </>
  )
}

export default Images
