import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'

export default function Home() {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}
