import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Box() {
  const theme = useContext(ThemeContext)
  return (
    <div>
      <div
        style={{ background: theme.primary.main, color: theme.primary.text }}
      >
        Box
      </div>
    </div>
  )
}

export default Box
