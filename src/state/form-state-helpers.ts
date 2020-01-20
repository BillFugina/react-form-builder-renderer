import { FormComponentID, FormComponent, FormRoot } from '../definitions/form-components'
import { replaceInFormComponent } from './form-helpers'
import { FormState } from './form-state'

export const changeFormDefinition = <T extends FormComponent>(
  currentDefinition: FormComponent,
  id: FormComponentID,
  newDefinition: FormComponent
): T => {
  const result = replaceInFormComponent<T>(currentDefinition, fc => (fc.id === id ? newDefinition : fc))
  return result
}

export const changeAppStateFormDefinition = (
  state: FormState,
  id: FormComponentID,
  newDefinition: FormComponent
): FormState => {
  const newFormDefinition = changeFormDefinition<FormRoot>(state.formDefinition, id, newDefinition)
  const result: FormState = { ...state, formDefinition: newFormDefinition }
  return result
}
