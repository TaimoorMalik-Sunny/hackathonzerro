import { CldImage } from 'next-cloudinary'

import cloudinary from "cloudinary"
import CloudinaryImage from '../../components/cloudinary_images'
import { SearchResult } from '../gallary/page'
import { ForceRefresh } from '@/components/force_refresh'
import FavoriteList from './favorites_list'



export default async function FavoritePage(){

  const results = await cloudinary.v2.search
  .expression("resource_type:image AND tags=favorite")
  .sort_by('created_at','desc')
  .max_results(30)
  .with_field('tags')
  .execute() as {resources:SearchResult[]}

 
   
  

  return(
    <section>
      <ForceRefresh/>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
        <h1 className="text-4xl font-bold" >Favorite Images</h1>
      
       </div>

       <FavoriteList initialResources={results.resources}/>
 
      </div>
    </section>
  )
}