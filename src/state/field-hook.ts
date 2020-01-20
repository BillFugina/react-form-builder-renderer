import { useAppState } from './state-context-provider'
import { FormComponentID } from '../definitions/form-components'
import { findInFormComponent } from './form-helpers'
import React from 'react'

export const useFormField = (id: FormComponentID) => {
  const [state, dispatchAction] = useAppState()
  const fieldState = React.useMemo(() => findInFormComponent(state.formDefinition, fc => fc.id === id), [
    state.formDefinition
  ])
  return [fieldState, dispatchAction]
}
