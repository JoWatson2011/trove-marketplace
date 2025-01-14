'use client'
 
import React from 'react'
import dynamic from 'next/dynamic'
 
const App = dynamic(() => import('../../Components/Home'), { ssr: false })
 
export function ClientOnly() {
  return <App />
}