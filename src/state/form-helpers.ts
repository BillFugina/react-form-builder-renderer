import { FormComponent } from '../definitions/form-components'

export const findInFormComponent = (
  formComponent: FormComponent,
  searchFunction: (formComponent: FormComponent) => boolean
): FormComponent | undefined => {
  if (searchFunction(formComponent)) {
    return formComponent
  }
  if (formComponent.type === 'form-root') {
    let result: FormComponent | undefined
    let index = 0
    while (index < formComponent.components.length && result === undefined) {
      result = findInFormComponent(formComponent.components[index++], searchFunction)
    }
    return result
  }
}

export function replaceInFormComponent<T extends FormComponent>(
  formComponent: FormComponent,
  replaceFunction: (childFormComponent: FormComponent) => FormComponent
): T {
  const maybeReplacedFormComponent = replaceFunction(formComponent)
  let changesInParent = maybeReplacedFormComponent !== formComponent

  const result = { ...maybeReplacedFormComponent }

  let changesInChildren = false
  if (result.type === 'form-root') {
    const components = result.components.map(fo => {
      const resultComponent = replaceInFormComponent(fo, replaceFunction)
      changesInChildren = changesInChildren || resultComponent !== fo
      return resultComponent
    })

    result.components = changesInChildren ? components : result.components
  }

  const returnValue = changesInParent || changesInChildren ? (result as T) : (formComponent as T)
  return returnValue
}
