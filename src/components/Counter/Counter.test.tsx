import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import Counter from './Counter'

afterEach(() => {
  cleanup()
})

describe('Counter component', () => {
  test('renders initial state', () => {
    const { getByTestId } = render(<Counter />)
    const countElement = getByTestId('count-number')
    expect(countElement).toHaveTextContent('0')
  })

  test('renders after increment', async () => {
    const { getByTestId } = render(<Counter />)
    const incrementButtonElement = getByTestId('increment-button')
    const countElement = getByTestId('count-number')

    await fireEvent.click(incrementButtonElement)

    expect(countElement).toHaveTextContent('1')
  })

  test('renders after reset', async () => {
    const { getByTestId } = render(<Counter />)
    const incrementButtonElement = getByTestId('increment-button')
    const resetButtonElement = getByTestId('reset-button')
    const countElement = getByTestId('count-number')

    await fireEvent.click(incrementButtonElement)
    await fireEvent.click(resetButtonElement)

    expect(countElement).toHaveTextContent('0')
  })
})
