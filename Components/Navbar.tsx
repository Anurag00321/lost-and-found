"use client"
import Link from 'next/link'
import React from 'react'
import { Form } from '@/Components/Form'
import { useState } from 'react'
import {signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'


function Navbar() {
  const [showModal, setShowModal] = useState(false)
  const {status, data:session} = useSession()
  return (
    <div className='flex justify-end items-center text-xl gap-20 pr-8 bg-green-400 h-16'>
      
      <button className='bg-blue-300 border border-green-200 p-1 rounded outline-none' onClick={()=> setShowModal(true)}>Post an item</button>
      <Link href="/Feed">Feed</Link>
      <Link href="/responses">Responses</Link>
      <Link href="/listing">My Listings</Link>
      {status === "authenticated"? (
        <div className='flex gap-10'>
      <button className='bg-purple-400 border border-white text-white p-1 rounded-lg' onClick={() => signOut()}>Sign Out</button>
      <Image src={session?.user?.image} className='rounded-full' width={50} height={40}/>
      </div>
      ):(
        <button className='bg-purple-400 border border-white text-white p-1 rounded-lg'  onClick={() => signIn("google")}>Sign In</button>
      )}
      <Form isVisible={showModal} onClose={()=> setShowModal(false)}/>
    </div>
  )
}

export default Navbar