import { Form, TextBox } from '../definitions/form-components'
import { findInFormComponent, replaceInFormComponent } from './form-helpers'

const testForm: Form = {
  id: 'root',
  type: 'form',
  components: [
    {
      id: 0,
      type: 'textbox',
      label: 'zero'
    },
    {
      id: 1,
      type: 'form',
      components: [
        {
          id: 1.0,
          type: 'textbox',
          label: 'one point zero'
        },
        {
          id: 1.1,
          type: 'form',
          components: [
            {
              id: '1.1.0',
              type: 'textbox',
              label: 'one point one point zero'
            },
            {
              id: '1.1.1',
              type: 'form',
              components: []
            },
            {
              id: '1.1.3',
              type: 'textbox',
              label: 'one dot one dot three'
            }
          ]
        },
        {
          id: 1.3,
          type: 'textbox',
          label: 'one dot three'
        }
      ]
    },
    {
      id: 2,
      type: 'textbox',
      label: 'two'
    }
  ]
}

const getNewTestForm = () => JSON.parse(JSON.stringify(testForm)) as Form

describe(`findInFormComponent`, () => {
  it(`finds a component in the first level`, () => {
    const form = getNewTestForm()
    const actual = findInFormComponent(form, f => f.id === 1)
    expect(actual).not.toBeNull()
  })

  it(`finds the correct component in the first level`, () => {
    const form = getNewTestForm()
    const found = findInFormComponent(form, f => f.id === 1)
    const actual = found?.id
    expect(actual).toEqual(1)
  })

  it(`finds the correct component in the second level`, () => {
    const form = getNewTestForm()
    const found = findInFormComponent(form, f => f.id === 1.1)
    const actual = found?.id
    expect(actual).toEqual(1.1)
  })

  it(`finds the correct component in the third level`, () => {
    const form = getNewTestForm()
    const found = findInFormComponent(form, f => f.id === '1.1.1')
    const actual = found?.id
    expect(actual).toEqual('1.1.1')
  })
})

describe(`replaceInFormComponent`, () => {
  it(`returns the original form instance if no changes are made`, () => {
    const form = getNewTestForm()
    const actual = replaceInFormComponent(form, f => f)
    expect(actual).toBe(form)
  })

  it(`returns the a new form instance if changes are made`, () => {
    const form = getNewTestForm()
    const actual = replaceInFormComponent(form, f => (f.id === 'root' ? { ...f, id: 'changed' } : f))
    expect(actual).not.toBe(form)
  })

  it(`returns the original form with its original component collection instance if no changes are made`, () => {
    const form = getNewTestForm()
    const resultForm = replaceInFormComponent<Form>(form, f => f)
    const actual = resultForm.components
    expect(actual).toBe(form.components)
  })

  it(`returns a new form instance if changes are made to a descendent component`, () => {
    const form = getNewTestForm()
    const resultForm = replaceInFormComponent<Form>(form, f => (f.id === 0 ? { ...f, id: 'changed' } : f))
    const actual = resultForm
    expect(actual).not.toBe(form)
  })

  it(`returns a new form instance with a new component collection instance if changes are made to a descendent component`, () => {
    const form = getNewTestForm()
    const resultForm = replaceInFormComponent<Form>(form, f => {
      const result = f.id === 0 ? { ...f, id: 'changed' } : f
      return result
    })
    const actual = resultForm.components
    expect(actual).not.toBe(form.components)
  })

  it(`returns a new form instance with a new component collection instance containing a new object if changes are made to a descendent component`, () => {
    const form = getNewTestForm()
    const resultForm = replaceInFormComponent<Form>(form, f => {
      const result = f.id === 0 ? { ...f, label: 'changed' } : f
      return result
    })
    const actual = resultForm.components[0]
    expect(actual).not.toBe(form.components[0])
  })

  it(`changes correct values`, () => {
    const form = getNewTestForm()
    const resultForm = replaceInFormComponent<Form>(form, f => {
      const result = f.id === 0 ? { ...f, label: 'changed' } : f
      return result
    })
    const actual = (resultForm.components[0] as TextBox).label
    expect(actual).toEqual('changed')
  })
})
