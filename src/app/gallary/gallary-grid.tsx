"use client";

import CloudinaryImage from '../../components/cloudinary_images'
import { ImageGrid } from '@/components/image-grid'
import { SearchResult } from './page';



export default async function GallaryGrid({images}:{images: SearchResult[]}){
  
  return(
  
   
       
       <ImageGrid 
       images={images}
       getImage={(imageData : SearchResult)=>{
        return(
          <CloudinaryImage
            key={imageData.public_id}
            width="400"
             height="300"
             imageData={imageData}
             alt="an image somthing "/>)
       }}/>

       
  
   
  )
}