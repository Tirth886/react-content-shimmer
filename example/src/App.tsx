import React from 'react'

import ContentShimmer, { BulletListShimmer,CardShimmer } from 'content-loader'

const App = () => {
  return (
    <>
      <ContentShimmer foreground="red" background="black" speed={5} rounded="50px" />
      <BulletListShimmer speed={10} background="black" rounded="50px" />
      <CardShimmer variant="rounded"   background="black" />
    </>
  )
}

export default App