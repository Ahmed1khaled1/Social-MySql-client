import React from 'react'
import Posts from '../components/Posts'
import ActiveSlider from '../components/activeSlider'
import Share from '../components/Share'

function Home() {
  return (
    <div >
  <Share/>
  <ActiveSlider/>
  <Posts/>
    </div>
  )
}

export default Home