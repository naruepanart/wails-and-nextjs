import React from 'react'
import Image from 'next/image'
import CalculatorComponents from './CalculatorComponents'

const page = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <h1 style={{ padding: "1rem 0" }}>wails + nextjs version 15.3.2 (app router)</h1>
      <Image src="/wails.png" alt="logo" width={800} height={480} />
      <CalculatorComponents />
    </div>
  )
}

export default page