import React from 'react'

export function Form({isVisible, onClose}) {
    if (!isVisible) return null

    return (
       
  
        <div className='m-auto flex   fixed inset-0 opacity-150 backdrop-blur-sm'>
            <form className='flex flex-col  rounded-xl m-auto p-4 w-1/3 h-fit border border-black'>
            <button className='text-xl place-self-start border border-black bg-red-500 p-1 rounded' onClick={()=> onClose()}>X</button>      <div className='flex flex-col gap-1 my-5'>
                <label>Item Name</label>
                <input className='border border-black rounded-lg outline-none p-1'/>
                </div>
                <div className='flex flex-col gap-1 my-2'>
                <label>Description</label>
                <input className='border border-black rounded-lg outline-none p-1'/>
                </div>
                <div className='flex flex-col gap-1 my-4'>
                <label>Question about the item</label>
                <input className='border border-black rounded-lg outline-none p-1'/>
                </div>
                <div className='mt-4 border border-black rounded-lg p-1 my-5'>
                    
                    <select className='outline-none'>
                    <optgroup>
                        <option>Select Type</option>
                        <option>Found</option>
                        <option>Lost</option>
                    </optgroup>
                    </select>
                </div>
                <input className='my-4' type='file'/>
                <button className='bg-blue-400 rounded-lg border border-blue-200 text-white font-mono p-1'>Submit</button>
            </form>
        </div>
    )
}
