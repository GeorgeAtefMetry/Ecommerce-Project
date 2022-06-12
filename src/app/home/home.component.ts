import { Component, OnInit } from '@angular/core';
import { storeData } from '../Models/store-data';
import { IProduct, ICategory, DiscountOffers } from '../Models/store-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // property with boolean type
  // showImg:boolean = true
  // toogleImg(){
  //   this.showImg = !this.showImg
  // }

  // showDisc:boolean = false
  // toogleDisc(){
  //   this.storeInfo;
  // }
  // Interface
  // storeInfo:IProduct={
  //   id:1,
  //   Name:'Fish',
  //   Quantity:10,
  //   Price:200,
  //   Img:'../../assets/fish.jpg',
  //   CategoryID:9
  // }
  // ClientName:string='Atef'

  // class property
  storedata:storeData;
  constructor() { 
    this.storedata = new storeData('Good Fish')
  }

// Day 2 //////////////////////////////////////////////////////////////////////////////

customerFeedback:string = "Niceee";










  ngOnInit(): void {

  }

}
