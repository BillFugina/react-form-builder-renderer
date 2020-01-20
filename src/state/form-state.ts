import { FormRoot, FormComponentID } from '../definitions/form-components'

export type FormState = {
  formDefinition: FormRoot
  values: Record<FormComponentID, any>
}
