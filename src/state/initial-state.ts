import { FormState } from './form-state'

export const initialState: FormState = {
  formDefinition: {
    id: '',
    type: 'form-root',
    components: []
  },
  values: {}
}
