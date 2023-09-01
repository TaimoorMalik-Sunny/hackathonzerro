
import Upload_button from './upload_button'
import cloudinary from "cloudinary"
import CloudinaryImage from '../../components/cloudinary_images'
import { ImageGrid } from '@/components/image-grid'
import GallaryGrid from './gallary-grid'

export type SearchResult = {
  public_id: string;
  tags:string[]
}

export default async function GallaryPage(){

  const results = await cloudinary.v2.search
  .expression("resource_type:image")
  .sort_by('created_at','desc')
  .max_results(30)
  .with_field('tags')
  .execute() as {resources:SearchResult[]}

  

 
  
  
  return(
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
        <h1 className="text-4xl font-bold" >Gallery</h1>
       <Upload_button/>
       </div>

     <GallaryGrid
     images = {results.resources}/>  
      </div>
    </section>
  )
}