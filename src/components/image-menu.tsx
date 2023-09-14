import { FolderPlus, Pencil
  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Menu } from "./Icons/menu"
import { AddToAlbumDialog } from "./add-to-album-dailog"
import { SearchResult } from "@/app/gallary/page"
import { useState } from "react"
import Link from "next/link"
  
  export function ImageMenu({image }: {image : SearchResult}) {
    const [open, setOpen] = useState(false);
    return (
        <div className="  absolute top-2 right-2 ">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary"
          className=" w-8 h-8 p-0">
           <Menu/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" w-40">
            <DropdownMenuItem asChild onClick={()=> setOpen(false)}>
            <AddToAlbumDialog  image = {image}/>
           </DropdownMenuItem>
           <DropdownMenuItem asChild onClick={()=> setOpen(false)}>
            <Link href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}>
              <Pencil className=" ml-1 mr-3 w-4 h-4"/>
              Edit
              </Link>
           </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    )
  }
  