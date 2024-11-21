import { ChangeEvent, useState } from "react"
import "./App.css"
import { romajip } from "romajip"
import ReactConfetti from "react-confetti"

function App() {
  const [value, setValue] = useState("")
  const [result, setResult] = useState("")
  const [showConfetti, setShowConfetti] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const handleButton = () => {
    const res = romajip(value)
    const result = res?.romaji
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
    setResult(result as string)
    setShowConfetti(true)
    setShowResult(true)
    setTimeout(() => setShowConfetti(false), 5000)
  }

  return (
    <>
      {showConfetti && (
        <ReactConfetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={true}
          numberOfPieces={500}
        />
      )}
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
        <p
          className={`transition-all duration-1000 ${
            showResult ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
          style={{
            fontSize: "32px",
            background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
            fontWeight: "bold",
            letterSpacing: "1px",
            animation: showResult ? "magicAppear 1s ease-out" : "none",
          }}
        >
          {result}
        </p>
      </div>
      <style>
        {`
          @keyframes magicAppear {
            0% {
              transform: scale(0) rotate(-180deg);
              opacity: 0;
            }
            50% {
              transform: scale(1.2) rotate(10deg);
            }
            100% {
              transform: scale(1) rotate(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  )
}

export default App
