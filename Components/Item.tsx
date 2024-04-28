import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import RemoveBtn from './RemoveBtn'


const getItems = async()=> {
    try{
        const res = await fetch("http://localhost:3000/api/items", {
            cache: "no-store",
        })
        if(!res.ok){
            throw new Error("Failed to fetch items")
        }
        return res.json()
    } catch (error){
        console.log("Error loading items :", error)
    }
}
export default async function ItemsList() {
const {items} = await getItems() 

    return (
        <>
        {items.map((i) => (
            <div className='m-2 p-2 rounded-lg border border-black h-fit flex justify-between' key={i._id}>
                <div>
                <h1>{i.title}</h1>
                <p>{i.description}</p>
                <span>{i.updatedAt}</span>
                <p>{i.itemType}</p>
                </div>
                <div className='flex text-lg gap-10 justify-center items-center text-center mr-4'>
                    <Link href={`/editItem/${i._id}`} className='bg-green-400 rounded-xl h-8 w-24 text-center border-green-200'>Edit</Link>
                    <RemoveBtn id={i._id}/>
                </div>
            </div>
            ))}
        </>
    )
}
