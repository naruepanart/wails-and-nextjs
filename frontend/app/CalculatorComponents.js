'use client'

import { useState } from 'react'
import { Plus } from "../wailsjs/go/main/App";

export default function CalculatorComponents() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(null)

  // calculate the sum of two numbers
  // using the Plus function from the backend
  const handleCalculate = async () => {
    const result = await Plus(num1 + num2)
    setResult(result)
  }

  // calculate the sum of two numbers
  // using JavaScript
  const handleCalculateWithJS = () => {
    setResult(num1 + num2)
  }


  return (
    <div style={{ padding: "1rem 0" }}>
      <p style={{ padding: "0.5rem 0" }}>เครื่องคิดเลข (Go backend for business logic)</p>
      {result !== null && (
        <div style={{ padding: "0.5rem 0" }}>
          <p>
            ผลลัพธ์: {num1} + {num2} = <span>{result}</span>
          </p>
        </div>
      )}

      <div>
        <label>
          ตัวเลขที่ 1: &nbsp;
        </label>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
        />
      </div>

      <div>
        <label>
          ตัวเลขที่ 2: &nbsp;
        </label>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
        />
      </div>

      <div div style={{ padding: "1rem 0" }}>
        <button onClick={handleCalculate}>
          คำนวณ GO
        </button>
        <button onClick={handleCalculateWithJS}>
          คำนวณ JS
        </button>
      </div>


    </div>
  )
}