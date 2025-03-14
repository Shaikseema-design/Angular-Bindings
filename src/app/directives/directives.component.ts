import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  isvisible:boolean=true;
  Mobiles=[
  {
    "id":1,
    "name":"Apple",
    "price":50000,
    "ram":"10gb"
  },
  {
    "id":2,
    "name":"Realme gt6",
    "price":45000,
    "ram":"10gb"
  },
  {
    "id":3,
    "name":"vivo",
    "price":35000,
    "ram":"8gb"
  },
  {
    "id":4,
    "name":"oppo",
    "price":30000,
    "ram":"7gb"
  },
  {
    "id":5,
    "name":"samsung",
    "price":37000,
    "ram":"8gb"
  }
  
];
number1:number=4;
number2:number=6;
op:string='';
name="seema"; //initialize name for pipes
salary=70000;
//JSON PIPE
object={
  'name':"Seema",
  'age':21,
  'salary':50000

}

//date pipe
dob=new Date();
//percent pipe
percentage:any='';
//slice pipe
company="Blaze automation";

isDarkTheme: boolean = false; // Track the current theme
isActive: boolean = false; // Track active state

toggleTheme() {
  this.isDarkTheme = !this.isDarkTheme; // Toggle the theme
}

toggleActive() {
  this.isActive = !this.isActive; // Toggle active state
}

fontSize: number = 16; // Default font size in pixels

  // Method to increase font size
  increaseFontSize() {
    this.fontSize += 2; // Increase font size by 2 pixels
  }

  // Method to decrease font size
  decreaseFontSize() {
    this.fontSize = Math.max(10, this.fontSize - 2); // Decrease font size by 2 pixels, minimum 10
  }


  constructor() { }

  ngOnInit(): void {
  }

}
