"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function SearchForm({intitialSearch}:{intitialSearch:string}){
    const [tagName, setTagname] = useState(intitialSearch ?? "");
    const router = useRouter();
    useEffect(()=>{
    setTagname(intitialSearch)
    },[intitialSearch])
    

    return<form onSubmit={(e)=>{
        e.preventDefault();
        router.replace(`/gallary?search=${encodeURIComponent(tagName)}`);
        router.refresh();

    }}>
         <Label htmlFor="tag-name" className="text-right">
            Search y Tag
            </Label>
          <div className="flex gap-2">            
              <Input
              onChange={(e)=> setTagname(e.currentTarget.value)}  
              id="album-name" 
              value={tagName} 
              />
             <Button type="submit">Search </Button>
             </div>
    
    </form>
}