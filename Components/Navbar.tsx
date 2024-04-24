"use client"
import Link from 'next/link'
import React from 'react'
import { Form } from '@/Components/Form'
import { useState } from 'react'

function Navbar() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className='flex justify-end items-center text-xl gap-20 pr-8 bg-green-400 h-12'>
      
      <button className='bg-blue-300 border border-green-200 p-1 rounded outline-none' onClick={()=> setShowModal(true)}>Post an item</button>
      <Link href="/Feed">Feed</Link>
      <Link href="/responses">Responses</Link>
      <Link href="/listing">My Listings</Link>
      <button>Sign Out</button>
     
      <Form isVisible={showModal} onClose={()=> setShowModal(false)}/>
    </div>
  )
}

export default Navbar