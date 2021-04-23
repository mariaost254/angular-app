//a model is a blueprint for objects we create [like a simple object class in java]
export class Recipe{

 public name: string;
 public subMenu : string;
 public description: string;
 public imagePath: string;


 constructor(name: string, subMenu:string,  description: string, imagePath: string){
   this.name = name;
   this.subMenu = subMenu;
   this.description = description;
   this.imagePath = imagePath;
 }
}

