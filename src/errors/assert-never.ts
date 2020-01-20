const AssertNever = (value: never): never => {
  throw `unexpected value, ${value}, where 'never' was expected.`
}
