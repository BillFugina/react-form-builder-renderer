require('@testing-library/jest-dom/extend-expect')
const { cleanup } = require('@testing-library/react')

afterEach(() => {
  cleanup()
})
