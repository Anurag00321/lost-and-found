"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export function Form({ isVisible, onClose }) {
    if (!isVisible) return null

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [question, setQuestion] = useState("")
    const [itemType, setItemType] = useState("")
    const [image, setImage] = useState("")

    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!title || !description || !itemType) {
            alert("All fields are required.");
            return;
          }
      
          try {
            const res = await fetch("http://localhost:3000/api/items", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({ title, description, question, itemType, image }),
            });
      
            if (res.ok) {
              router.push("/Feed");
            } else {
              throw new Error("Failed to create an item");
            }
          } catch (error) {
            console.log(error);
          }
        };


    return (


        <div className='m-auto flex   fixed inset-0 opacity-150 backdrop-blur-sm'>
            <form onSubmit={handleSubmit} className='flex flex-col  rounded-xl m-auto p-4 w-1/3 h-fit border border-black'>
                <button className='text-xl place-self-start border border-black bg-red-500 p-1 rounded' onClick={() => onClose()}>X</button>      <div className='flex flex-col gap-1 my-5'>
                    <label>Item Name</label>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} className='border border-black rounded-lg outline-none p-1' />
                </div>
                <div className='flex flex-col gap-1 my-2'>
                    <label>Description</label>
                    <input onChange={(e) => setDescription(e.target.value)} value={description} className='border border-black rounded-lg outline-none p-1' />
                </div>
                <div className='flex flex-col gap-1 my-4'>
                    <label>Question about the item</label>
                    <input onChange={(e) => setQuestion(e.target.value)} value={question} className='border border-black rounded-lg outline-none p-1' />
                </div>
                <div className='mt-4 border border-black rounded-lg p-1 my-5'>
                    <label>Select Type</label>
                    <select className='outline-none mx-4' onChange={(e) => setItemType(e.target.value)} value={itemType}>


                        <option value="found">Found</option>
                        <option value="lost">Lost</option>

                    </select>
                </div>
                <input className='my-4' type='file' value={image} onChange={(e) => setImage(e.target.value)} />
                <button type="submit" className='bg-blue-400 rounded-lg border border-blue-200 text-white font-mono p-1'>Submit</button>
            </form>
        </div>
    )
    }
