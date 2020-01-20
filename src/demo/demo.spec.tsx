import { render } from '@testing-library/react'

import * as React from 'react'

import { Demo } from './demo'

it(`renders the demo`, () => {
  const view = render(<Demo />)
  const actual = view.queryByTestId(`demo-wrapper`)
  expect(actual).toBeInTheDocument()
})
