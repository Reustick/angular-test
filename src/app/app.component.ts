import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valString:string 
  valToJSON; 
  titles = []; 
  isReadyToReturn = false; 
  takeMyString() {
    this.valToJSON = JSON.parse(this.valString); 
    this.valToJSON.forEach(element => { 
      Object.keys(element).filter((item) => {
        let name = item.slice(0,1).toUpperCase() + item.slice(1)
        this.titles.includes(name)? '': this.titles.push(name);
      })
    })
    this.isReadyToReturn = !this.isReadyToReturn; 
  } 
  giveMyStringBack() {
    this.valString = JSON.stringify(this.valToJSON); 
    this.isReadyToReturn = !this.isReadyToReturn; 
  }
  change() {
    this.isReadyToReturn ? this.giveMyStringBack() : this.takeMyString();
  }
}
