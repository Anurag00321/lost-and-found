import connectMongoDB from "../../../../libs/mongodb"
import Item from "../../../../models/item"
import { NextResponse } from "next/server"

export async function PUT(request, {params}){
    const {id} = params
    const {newTitle: title, newDescription: description, newQuestion: question, newItemType: itemType, newImage: image} = await request.json()
    await connectMongoDB()
    await Item.findByIdAndUpdate(id, {title, description, question, itemType, image})
    return NextResponse.json({ message: "Item updated" }, { status:200})
}

export async function GET(request, {params}){
    const {id} = params
    await connectMongoDB()
    const item = await Item.findOne({_id: id})
    return NextResponse.json({item}, { status:200}) 
}