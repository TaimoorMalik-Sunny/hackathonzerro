"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({searchParams:{publicId}}:
    {
        searchParams:{
            publicId:string
        }
    }){
    const [transformation , settransformation] = useState<undefined|"generative-fill"|"blur"|"grayscale"|"pixelate"|"removeBackground">()
    const [tagPromp, setTagPromp] = useState("");
    return (
    <section>
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
      <h1 className="text-4xl font-bold" >Edit {publicId}</h1>
 
     </div>
     <div className="flex gap-4">
     <Button variant="ghost" onClick={()=>settransformation(undefined)} >Clear All</Button>
     <Button onClick={()=>settransformation("generative-fill")} >Generative fill</Button>
     <Input className=" w-32"
            onChange={(e)=> setTagPromp(e.currentTarget.value)}  
            id="album-name" 
            value={tagPromp} 
             />
     <Button onClick={()=>settransformation("blur")} >Apply blur</Button>
     <Button onClick={()=>settransformation("grayscale")} >Convert to gray</Button>
     <Button onClick={()=>settransformation("pixelate")} >Convert to pixelate</Button>
     <Button onClick={()=>settransformation("removeBackground")} >Remove Background</Button>
     </div>
     <div className="grid grid-cols-2 gap-12">
     <CldImage src={publicId} width="300" height="200" alt="edit images"/>
  {
    transformation === 'generative-fill' && 
    <CldImage 
    src={publicId} 
    width="2400" 
    height="1200" 
    alt="edit images"
    crop="pad"
    fillBackground={
     { prompt: tagPromp}
    }
    />
  }
  {
    transformation === "grayscale" && 
    <CldImage 
    src={publicId} 
    width="1200" 
    height="1400" 
    alt="edit images"
    grayscale
   
    />
  }
    {
    transformation === "blur"&& 
    <CldImage 
    src={publicId} 
    width="1200" 
    height="1400" 
    alt="edit images"
    blur="800"
   
    />
  }
  {
    transformation === "pixelate" && 
    <CldImage 
    src={publicId} 
    width="1200" 
    height="1400" 
    alt="edit images"
    pixelate
   
    />
  }
   {
    transformation === "removeBackground" && 
    <CldImage 
    src={publicId} 
    width="1200" 
    height="1400" 
    alt="edit images"
    removeBackground
   
    />
  }
  
  
   </div>
    </div>
  </section>);}