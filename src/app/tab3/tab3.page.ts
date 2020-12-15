import { Component } from '@angular/core';
import  * as fruit from "../../assets/vocab.json"


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

fruity: any
importedFruit: any = fruit 
vocab = {
    "fruit": "Apples",
    "size": "Large",
    "color": "Red"
}
  constructor() {
    console.log("imported", fruit.fruit)
    console.log("imported", fruit)
    //this.importedFruit = fruit.fruit
    //console.log("ip", importedFruit 
    console.log(this.vocab.fruit)
    this.fruity = this.vocab.fruit
    console.log("fruit=", this.vocab)
    console.log("fruity=", this.fruity)

  }

}
