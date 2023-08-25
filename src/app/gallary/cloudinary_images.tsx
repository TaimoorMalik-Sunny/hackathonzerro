'use client'

import Hearts from "@/components/Icons/Hearts"
import { CldImage } from "next-cloudinary"
import { SetAsFavoriteAction } from "./actions"
import { startTransition, useTransition } from "react"
import { SearchResult } from "./page"
import FullHearts from "@/components/Icons/FullHearts"


export default function CloudinaryImage(props:any & {imageData:SearchResult; path:string}){
    const {imageData }= props
    const [transition , SetTransition] = useTransition();
    const isFavorited = imageData.tags.includes("favorite");
   
return( 
    <div className="relative">
     <CldImage {...props} 
     src={imageData.public_id}/>

    {
        isFavorited ?

        <FullHearts
        onClick={()=>{
   
           startTransition(()=>{
               console.log(imageData.public_id)
               console.log(imageData.tags)
               SetAsFavoriteAction(imageData.public_id, false ,props.path )
           });        
          }}  
        className=" absolute top-2 right-2 hover:text-white text-red-400 cursor-pointer"/>
        :

    

     <Hearts
     onClick={()=>{

        startTransition(()=>{
            console.log(imageData.public_id)
            console.log(imageData.tags)
            SetAsFavoriteAction(imageData.public_id ,true, props.path)
        });        
       }}  
     className=" absolute top-2 right-2 hover:text-red-300 cursor-pointer"/>
    }
     </div>
     )
}