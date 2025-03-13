import { Component, } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  title:string = 'Hello, Angular'; // -> Title for string interpolation
  count:number = 0;
  imageUrl:string ='https://images3.alphacoders.com/708/thumb-1920-708179.jpg'; // -> Image URL for property binding
  isdisabled:boolean =true; // -> Flag to control button disabled state
  isspecial:boolean =true; // -> Flag for class binding
  fontSize:number =50; // -> Initial font size for style binding
  color:string='pink'; // -> Initial font color for style binding
  ispink:boolean=true; // -> Initial font color for style binding
  name:string='';  // -> Property for two-way binding
  
  // URL for the anchor tag
  linkUrl: string = 'https://angular.io'; 
  // Method to change the text size
  Decreasefont(){
    this.fontSize-=10;
  }
  Increasefont(){
    this.fontSize+=10;
  }
  // Method to change the text color
  Fontcolor(){
    this.ispink =!this.ispink;
    this.color = this.ispink ? 'pink' : 'blue';
  }
  togglespecial(){
  this.isspecial=!this.isspecial;
  }
  increment(){
    this.count++;
  }
  decrement(){
    this.count--;
  }
  changed(){
    this.title = 'Title Changed';
  }


}
