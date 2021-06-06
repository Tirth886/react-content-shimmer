# content-loader

> Content Loader to easily create placeholder loading, image loading, card loading, etc ..

[![NPM](https://img.shields.io/npm/v/content-loader.svg)](https://www.npmjs.com/package/content-loader) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save content-loader
```

## Usage

```jsx
import React, { Component } from 'react'

import { ContentLoader } from 'content-loader'

const App = () => {
  return (
    <div>
        <ContentLoader size={{ height: 100, width: 100 }}/>
    </div>
  )
}

export default App

```

![Alt Text](./ss/defaultLoader.png)



## License

MIT © [Tirth886](https://github.com/Tirth886)
