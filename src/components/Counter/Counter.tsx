import React from 'react'
import './Counter.css'

function Counter(): JSX.Element {
  const [count, setCount] = React.useState<number>(0)

  return (
    <React.Fragment>
      <h1>My little counter</h1>
      <div className="counter-button-wrapper">
        <button
          data-testid="increment-button"
          onClick={() => setCount((count) => count + 1)}
        >
          +
        </button>
        <button data-testid="reset-button" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
      <p data-testid="count-number">{count}</p>
    </React.Fragment>
  )
}

export default Counter
