import { useState } from 'react'
import ExampleComponent from './components/Example'
import SammForm from './components/SammForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <SammForm />
      <div className="card">
        <ExampleComponent />
        <button onClick={() => setCount((count) => count + 1)} className="btn btn-accent">
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
