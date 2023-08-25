import { CldImage } from 'next-cloudinary'
import Upload_button from './upload_button'
import cloudinary from "cloudinary"
import CloudinaryImage from './cloudinary_images'

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

  console.log(results, results)
   
  

  return(
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
        <h1 className="text-4xl font-bold" >Gallery</h1>
       <Upload_button/>
       </div>
      <div className="grid grid-cols-4 gap-4 ">
       {results.resources.map(result=>(
       
          <CloudinaryImage
          path="/gallary"
          key={result.public_id}
         width="400"
          height="300"
          imageData={result}
          alt="an image somthing "
          />
        ))}
       </div>
      </div>
    </section>
  )
}