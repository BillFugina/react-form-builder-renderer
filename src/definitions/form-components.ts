export type FormComponentID = string | number
export type HasID = {
  id: FormComponentID
}
export type HasLabel = {
  label: string
}

export type FormRoot = HasID & {
  type: 'form-root'
  components: FormComponent[]
}

export type TextBox = HasID &
  HasLabel & {
    type: 'textbox'
  }

export type FormComponent = FormRoot | TextBox
