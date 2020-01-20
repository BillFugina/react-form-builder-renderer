import React from 'react'

import { DemoWrapper } from './styled/demo'

export const Demo: React.FunctionComponent = () => {
  return (
    <DemoWrapper data-testid='demo-wrapper'>
      <div>Hello World</div>
    </DemoWrapper>
  )
}
