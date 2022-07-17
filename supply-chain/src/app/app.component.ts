import { getLocaleDayNames } from "@angular/common";
import { Component } from "@angular/core";

@Component({
selector:'pm-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']

}
)
export class AppComponent{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  pageTitle:string="Welcome to Srihari Bhavan";
  pageSubtitle:string="a new taste that you will never forget"

}
let firstName:string="Srihari";
console.log(typeof firstName);

let age=23;
age=56;
console.log(age);

const names =["Srihari"];
names.push("Swathi","Karthik","chandan");
console.log(names);


const numbers=[1,4,5,6];
numbers.push(6);
console.log(numbers);


let sy:[number,boolean,string];
sy=[23, false, "i love learning"];
console.log(sy);  

const car:{type:string, model:string, year:number}={
  type:"Maruti",
  model: "VXi", 
  year:2013
};

car.type="Hyundai"
console.log(car);

const bus:{type?:string, model?:string}={};
bus.type="Ashok Leyland";
bus.model="2013";
console.log(bus);

interface Rectangle {
  height:number,
  width:number
}

const rec:Rectangle={
  height:60,
   width:600
}
console.log(rec)

function multiply(a: number, b: number, c:number) {
  return a * b+c;
}

console.log(multiply(2,5,4567))




