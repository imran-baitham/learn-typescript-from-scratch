import React from 'react'

export interface HeaderProps {
  title: string
}

function Header({ title }: HeaderProps) {
  return (
    <div className="border bg-red-300">
      <h1>{title}</h1>
    </div>
  )
}

export default Header
