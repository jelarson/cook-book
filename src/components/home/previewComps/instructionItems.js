import React from 'react'
import { css } from '@emotion/core'

export default function InstructionItem(props) {
  const { instruction } = props
  return (
    <div>
      <p>
        My instruction is {instruction}. Instructions Placeholder. I am a placeholder for the instructions. What I am is
        a placeholder for instructions.
      </p>
    </div>
  )
}