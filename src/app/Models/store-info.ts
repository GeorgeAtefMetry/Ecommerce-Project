export interface IProduct {
    
    id:number;
    Name:string;
    Quantity:number;
    Price:Number;
    Img:string;
    CategoryID:number;
}
export interface ICategory {
    id:number;
    Name:string;
}

export enum DiscountOffers {
    NoDisc = "No Discount",
    DiscTen = "10%",
    DiscFifteen = "15%"
}