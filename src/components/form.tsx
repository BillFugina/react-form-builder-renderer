import React from 'react'
import { StateProvider } from '../state/state-context-provider'
type FormProps = {}

const Form: React.FunctionComponent<FormProps> = props => {
  return (
    <StateProvider>
      <div />
    </StateProvider>
  )
}

export { Form }
