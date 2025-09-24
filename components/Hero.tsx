'use client'
import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <header className="relative bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Sonic — Fast, modern landing</h1>
          <p className="mt-4 text-lg text-gray-700">Converted from a static export. This is a starting point — I can refine markup and styles to match pixel-perfect.</p>
          <div className="mt-6 flex gap-4">
            <a href="#contact" className="px-5 py-3 rounded-lg border font-medium">Get in touch</a>
            <a href="#blog" className="px-5 py-3 rounded-lg bg-black text-white font-medium">Read blog</a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          {/** Use og-image.jpg if present in public */}
          <Image src="/og-image.jpg" alt="Sonic preview" width={900} height={540} style={{width:'100%', height:'auto'}} />
        </div>
      </div>
    </header>
  )
}
