// Write a program to calculate purchases from a kiosk. For e.g. given the fruit name 
// 'orange' the program should fetch its price (30.00) and multiply with the quantity 
// requested (2) and return total cost in this printed format (2 Oranges for KES 
// 60.00). 
// calculateFruitCost(fruitName, quantity)
// For example, calculateFruitCost('orange', 2) should return "2 Oranges for KES 
// 60.00"
function calculateFruitCost(fruitName,quantity){ 
    var fruits={apple:30,kiw:70,oranges:5,palm:15,watermelon:140}  
    for(let i=0;i<Object.keys(fruits).length;i++){ 
        if(fruitName==Object.keys(fruits)[i]){ 
             console.log(Object.values(fruits)[i]*quantity)
        } 

    }
}  
// calculateFruitCost("mangoes",7)
// Write a class KioskCalc that has the following fruitsPriceList object.
// this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
// and takes two parameters (fruit, quantity) when initialized i.e. 
// var kioskCalc = new KioskCalc(“orange”, 2);
// Thereafter, it allows one to calculate the total cost of the fruit by accessing the 
// getTotalCost( ) method. 
class KioskCalc{
    constructor(name,price,friutsPriceList){
      this.friutsPriceList={ 'peach':30,'cherry':15,'lemon':40};
      this.name=name
      this.price=price
    }
  
  }
  let kioskCalc= new KioskCalc('peach',50)
  KioskCalc.prototype.getTotalCost=function(fruit,quantity){
    return `${quantity} ${fruit} for KES ${quantity*this.price}`
  }
  console.log(kioskCalc.getTotalCost("peach",4));