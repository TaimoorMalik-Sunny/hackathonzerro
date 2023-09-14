import cloudinary from "cloudinary"
import AlbumGrid from './album-grid'
import { SearchResult } from '@/app/gallary/page'
import { ForceRefresh } from "@/components/force_refresh";

// export type SearchResult = {
//   public_id: string;
//   tags:string[]
// }

export default async function GallaryPage({
     params:{ albumName },
     }:{
    params: {
        albumName:string;
    };
}){

  const results = await cloudinary.v2.search
  .expression(`resource_type:image AND folder=${albumName}`)
  .sort_by('created_at','desc')
  .max_results(30)
  .with_field('tags')
  .execute() as {resources:SearchResult[]}

  

 
  
  
  return(
    <section>
      <ForceRefresh/>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
        <h1 className="text-4xl font-bold" >Album {albumName}</h1>
     
       </div>

     <AlbumGrid
     images = {results.resources}/>  
      </div>
    </section>
  )
}