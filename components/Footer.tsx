import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t mt-16 py-8">
      <div className="max-w-screen-xl mx-auto px-6 text-sm text-gray-600">
        <div>© {new Date().getFullYear()} Sonic — Converted. All rights reserved.</div>
        <div className="mt-2">Built from static export. Convert more sections by request.</div>
      </div>
    </footer>
  )
}
