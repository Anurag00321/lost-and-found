import connectMongoDB from "../../../libs/mongodb"
import Item from "../../../models/item";
import {NextResponse} from "next/server"

export async function POST(request){
    const {title, description, question, itemType, image} = await request.json()
    await connectMongoDB();
    await Item.create({title, description, question, itemType, image});
    return NextResponse.json({message: "Item Created"}, { status: 201});
}

export async function GET(){
    await connectMongoDB()
    const items = await Item.find()
    return NextResponse.json({items})
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id")
    await connectMongoDB()
    await Item.findByIdAndDelete(id)
    return NextResponse.json({message: "Item deleted" }, { status:200 })
}