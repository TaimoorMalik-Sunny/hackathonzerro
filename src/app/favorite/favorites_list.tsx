"use client"

import { CldImage } from 'next-cloudinary'



import CloudinaryImage from '../../components/cloudinary_images'
import { SearchResult } from '../gallary/page'
import { useEffect, useState } from 'react';
import { ImageGrid } from '@/components/image-grid';




export default function FavoriteList({

    initialResources,
}:{
    initialResources:SearchResult[];
})
{
    const [resources ,setResources] = useState(initialResources)

    useEffect(()=>{
      setResources(initialResources);
    },[initialResources]);


  return(
    <ImageGrid 
    images={resources}
    getImage={(imageData : SearchResult)=>{
      return(
        <CloudinaryImage
          
          key={imageData.public_id}
         width="400"
          height="300"
          imageData={imageData}
          alt="an image somthing "
          onUnheart={(unheartedResource)=>{
            setResources((currentResources)=>
            currentResources.filter(
                (resources) => resources.public_id !== unheartedResource.public_id
            )
            )

          }}
          />
      )
     }}
    />
 )
}