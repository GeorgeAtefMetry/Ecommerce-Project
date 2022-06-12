import { Component, OnInit } from '@angular/core';
import { Icategory } from '../icategory';
import { Iproduct } from '../iproduct';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  //filter product details on name and return productDetails object.
  SearchProduct(id: number) {  
    let obj = this.productList.filter(m => m.id == id);  
    this.productList = obj;  
    return this.productList;  
  }  
  
  Decrease(pro: any) {
      pro.quantity--;
  }

  productList:Iproduct[];

// Category Array
catList:Icategory[];
selectedCatID:number = 0;

  constructor() {
    this.productList=[
      {
        id:1,
        name:'Apple',
        price:21000,
        quantity:1,
        imgURL:'https://fakeimg.pl/250x100/',
        categoryId:1
      },
      {
        id:1,
        name:'SamSung',
        price:32000,
        quantity:2,
        imgURL:'https://fakeimg.pl/250x100/',
        categoryId:2
      },
      {
        id:2,
        name:'Xiaomi',
        price:16000,
        quantity:5,
        imgURL:'https://fakeimg.pl/250x100/',
        categoryId:3
      },
      {
        id:2,
        name:'Dell',
        price:36000,
        quantity:10,
        imgURL:'https://fakeimg.pl/250x100/',
        categoryId:4
      },
      {
        id:2,
        name:'Lenovo',
        price:1000,
        quantity:0,
        imgURL:'https://fakeimg.pl/250x100/',
        categoryId:5
      },
      {
        id:3,
        name:'Toshipa',
        price:46000,
        quantity:2,
        imgURL:'https://fakeimg.pl/250x100/',
        categoryId:6
      },{
        id:3,
        name:'LG',
        price:10000,
        quantity:7,
        imgURL:'https://fakeimg.pl/250x100/',
        categoryId:7
      }
    ]

    this.catList=[
      {id:1,name:'Mobiles'},
      {id:2,name:'Laptops'},
      {id:3,name:'TV'},
    ]
  }

  trackByFunc(index:number,item:Iproduct){
    return item.id
  }

  todayDate:Date = new Date()

  ngOnInit(): void {
  }

}
