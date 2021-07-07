import React from 'react'
import './index.css'
import ContentShimmer from 'react-content-shimmer'

const App = () => {
  return (
    <div>
      <div className="p-2 d-flex align-items-center">
        <div>
          <div className="p-2 d-flex align-items-center">
            <ContentShimmer size={{ height: 80, width: 80 }} rounded="10%" />
            <div className="p-3">
              <ContentShimmer style={{ marginBottom: "1rem" }} size={{ height: 15, width: 200 }} />
              <ContentShimmer size={{ height: 15, width: 100 }} />
            </div>
          </div>
          <ContentShimmer style={{ marginTop: "1rem" }} rounded={"10px"} size={{ height: 15, width: 350 }} />
          <ContentShimmer style={{ marginTop: "1rem" }} rounded={"10px"} size={{ height: 15, width: 350 }} />
        </div>
      </div>
    </div>
  )
}

export default App
