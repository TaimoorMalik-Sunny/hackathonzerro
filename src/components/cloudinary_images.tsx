'use client'

import Hearts from "@/components/Icons/Hearts"
import { CldImage, CldImageProps } from "next-cloudinary"
import { SetAsFavoriteAction } from "../app/gallary/actions"
import { ComponentProps, startTransition, useState, useTransition } from "react"
import { SearchResult } from "../app/gallary/page"
import FullHearts from "@/components/Icons/FullHearts"
import { ImageMenu } from "./image-menu"


export default function CloudinaryImage(
  props:{
    imageData:SearchResult; 
    onUnheart?:(unheartedResource: SearchResult)=> void;}
    & Omit <CldImageProps, "src" >
    ){
    const {imageData , onUnheart }= props
    const [transition , SetTransition] = useTransition();
    

    const [isFavorited , setIsFavorited] = useState(
        imageData.tags.includes("favorite")
        )
   
return( 
    <div className="relative">
     <CldImage {...props} 
     src={imageData.public_id}/>

    {
        isFavorited ?

        <FullHearts
        onClick={()=>{
            onUnheart?.(imageData)
            setIsFavorited(false)
   
           startTransition(()=>{
           
             
               SetAsFavoriteAction(imageData.public_id, false  )
           });        
          }}  
        className=" absolute top-2 left-2 hover:text-white text-red-400 cursor-pointer"/>
        :

    

     <Hearts
     onClick={()=>{
        setIsFavorited(true)

        startTransition(()=>{
            
            SetAsFavoriteAction(imageData.public_id ,true)
        });        
       }}  
     className=" absolute top-2 left-2 hover:text-red-300 cursor-pointer"/>
    }
    <ImageMenu image={imageData}/>
     </div>
     )
}