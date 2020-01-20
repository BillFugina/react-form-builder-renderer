import { FormState } from './form-state'
import { Action } from './actions'
import { changeAppStateFormDefinition } from './form-state-helpers'

export const appReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case 'change-value':
      return { ...state, values: { ...state.values, [action.id]: action.value } }
    case 'change-definition':
      return changeAppStateFormDefinition(state, action.id, action.definition)
    default:
      AssertNever(action)
  }

  return state
}
