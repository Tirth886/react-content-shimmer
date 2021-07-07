import React from 'react'
import './index.css'
import ContentShimmer, { CodeShimmer,BulletListShimmer,SocialShimmer,ProfileShimmer,CardShimmer } from 'content-loader'

const App = () => {
  return (
    <>
      <ContentShimmer />
      <CodeShimmer />
      <BulletListShimmer />
      <SocialShimmer />
      <ProfileShimmer />
      <CardShimmer style={{boxShadow : "0 0 10px 1px #ccc",width : "300px",borderRadius: "10px",padding : "1rem"}} />
    </>
  )
}

export default App
