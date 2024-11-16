import { ChangeEvent, useState } from "react"
import "./App.css"
import { romajip } from "romajip"

function App() {
  const [value, setValue] = useState("")
  const [result, setResult] = useState("")

  const handleButton = () => {
    const res = romajip(value)
    const result = res?.romaji
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
    setResult(result as string)
  }
  return (
    <>
      <h1>Romajip 📮</h1>
      <div className="card">
        <input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          style={{
            marginBottom: "24px",
            width: "300px",
            padding: "8px",
            borderRadius: "12px",
          }}
        />
        <br />
        <button onClick={handleButton}>ROMAJIP!!</button>
        <p>JP: {value}</p>
        <p>EN: {result}</p>
      </div>
    </>
  )
}

export default App
