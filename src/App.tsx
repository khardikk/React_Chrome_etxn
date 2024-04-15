import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('')
  
  const onclick = async () => {
        let [tab] = await chrome.tabs.query({ active: true });
        chrome.scripting.executeScript<string[], void>({
          target: {tabId: tab.id!},
          args: [color],
          func: (color) => {
            document.body.style.backgroundColor = color;
          }
        });
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Basic Color Picker Extension</h1>
      <div className="card">
        <input type="color" value={color} onChange={(e) => setColor(e.currentTarget.value)} />
        <button onClick={() => onclick()}>
          Click to change color
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>This is to practice <code>Chrome Web APIS</code></p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
