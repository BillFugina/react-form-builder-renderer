import '@testing-library/jest-dom/extend-expect'

export * from '@testing-library/react'

export const windowAsAny = window as any

export const observeMock = {
  observe: () => null,
  disconnect: () => null,
  unobserve: () => null
}
