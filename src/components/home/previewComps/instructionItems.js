import React from 'react'

export default function InstructionItem(props) {
  const { instruction } = props
  return (
    <div>
      <p>{instruction}</p>
    </div>
  )
}
