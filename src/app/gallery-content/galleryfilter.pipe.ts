import { PipeTransform, Pipe } from "@angular/core";
import { GalleryModel } from "../models/gallery.model";
@Pipe({
    name:'galleryFilter'
})
export class galleryFilterPipe implements PipeTransform
{
    transform(gallery:GalleryModel[],searchName:String):GalleryModel[]
    {
if(!gallery|| !searchName)
{
return gallery;
     }
    return gallery.filter(galleries=>
        galleries.Name.toLowerCase().indexOf(searchName.toLowerCase()) !==-1);
    }
}