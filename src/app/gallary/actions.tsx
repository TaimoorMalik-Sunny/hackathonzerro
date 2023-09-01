"use server"
import cloudinary from 'cloudinary'

export async function SetAsFavoriteAction(
    publicId:string, 
    IsFavorit:boolean
    ){

        if (IsFavorit){
            await  cloudinary.v2.uploader.add_tag("favorite",[publicId]);
           

        }
        else{

            await  cloudinary.v2.uploader.remove_tag("favorite",[publicId]);

        }
       

}