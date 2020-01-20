import { FormValue } from '../definitions/value-types'
import { FormComponentID, FormComponent } from '../definitions/form-components'

export const changeValue = (id: FormComponentID, value: FormValue) => ({ type: 'change-value' as const, id, value })
export const changeDefinition = (id: FormComponentID, definition: FormComponent) => ({
  type: 'change-definition' as const,
  id,
  definition
})

export type Action = ReturnType<typeof changeValue> | ReturnType<typeof changeDefinition>
