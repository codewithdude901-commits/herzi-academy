'use client'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="max-w-screen-xl mx-auto p-6 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">Sonic</Link>
      <div className="space-x-4">
        <Link href="#features" className="hover:underline">Features</Link>
        <Link href="#blog" className="hover:underline">Blog</Link>
        <Link href="#contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  )
}
