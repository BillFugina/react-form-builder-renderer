import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Demo } from './demo/demo'
import { GlobalStyle } from './global'

const Index = () => {
  return (
    <>
      <GlobalStyle />
      <Demo />
    </>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
