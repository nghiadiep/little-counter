import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import App from './App'

afterEach(() => {
  cleanup()
})

describe('App component', () => {
  test('renders with Counter component', () => {
    render(<App />)
    const counterHeadingElement = screen.getByText(/My little counter/i)
    expect(counterHeadingElement).toBeInTheDocument()
  })
})
