import React from 'react'

import { ContentLoader } from 'content-loader'

const App = () => {
  return (
    <div style={{ padding: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }} >
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <ContentLoader size={{ height: 50, width: 50 }} rounded="50%" />
          <div style={{ paddingLeft: "2rem" }}>
            <ContentLoader style={{ marginBottom: "1rem" }} size={{ height: 7, width: 200 }} />
            <ContentLoader size={{ height: 7, width: 100 }} />
          </div>
        </div>
        <ContentLoader style={{ marginTop: "1rem" }} rounded={"10px"} size={{ height: 10, width: 350 }} />
        <ContentLoader style={{ marginTop: "1rem" }} rounded={"10px"} size={{ height: 10, width: 350 }} />
      </div>
    </div>
  )
}

export default App
