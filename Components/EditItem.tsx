"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditItemForm({ id, title, description, question, itemType }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newQuestion, setNewQuestion] = useState(question)
  const [newItemType, setNewItemType] = useState(itemType)

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/items/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription, newQuestion, newItemType }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/Feed");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='m-auto flex   fixed inset-0 opacity-150 backdrop-blur-sm'>
            <form onSubmit={handleSubmit} className='flex flex-col  rounded-xl m-auto p-4 w-1/3 h-fit border border-black'>
             <div className='flex flex-col gap-1 my-5'>
                    <label>Item Name</label>
                    <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} className='border border-black rounded-lg outline-none p-1' />
                </div>
                <div className='flex flex-col gap-1 my-2'>
                    <label>Description</label>
                    <input onChange={(e) => setNewDescription(e.target.value)} value={newDescription} className='border border-black rounded-lg outline-none p-1' />
                </div>
                <div className='flex flex-col gap-1 my-4'>
                    <label>Question about the item</label>
                    <input onChange={(e) => setNewQuestion(e.target.value)} value={newQuestion} className='border border-black rounded-lg outline-none p-1' />
                </div>
                <div className='mt-4 border border-black rounded-lg p-1 my-5'>
                    <label>Select Type</label>
                    <select className='outline-none mx-4' onChange={(e) => setNewItemType(e.target.value)} value={newItemType}>


                        <option value="found">Found</option>
                        <option value="lost">Lost</option>

                    </select>
                </div>
                
                <button className='bg-blue-400 rounded-lg border border-blue-200 text-white font-mono p-1'>Update</button>
            </form>
        </div>
  );
}