class Mkulima{
    constructor(farm,products,vendors,orders){
        this.farm=farm;
        this.products=products;
        this.vendors=vendors;
        this.orders;
    }
    addFarm(farmId,name,farmer,phone,address){
        let farm={  //farm has properties,so I have to create an object
            farmId:farmId,
            name:name,
            farmer:farmer,
            phone:phone,
            address:address,
        
        }
        return this.farm.push(farm);//.push method adds an item to an array:for this case,to add each item to be added to the farm
    }
    removeFarm(farmId){
        var farm2=this.farm.find(farm2=>farmId===farmId);
        return delete this.farm[farm2]
    }
    updateFarm(farmId,name,farmer,phone,address){
        let newFarm=this.farm.find(newFarm=>name==="Mavuno");
        newFarm={
            farmId:farmId,
            name:name,
            farmer:farmer,
            phone:phone,
            address:address,

        }
        return newFarm
    }
getFarm(farmId){
    let farm3=this.farm.find(farm3=>farm3.farmId===farmId);
    return farm3

}
addProduct(productId,name,price){
    let products={
        productId:productId,
        name:name,
        price:price,
    }

    return this.products.push(products);
}
removeProduct(productId){
    var productNew=this.products.find(productNew=>productId===productId);
    return delete this.products[productNew];
}
updateProduct(productId,name,price){
    let newItem=this.products.find(newItem=>update.name===name);
    let update={
        productId:productId,
        name:name,
        price:price,
     }
     return newItem;
    }
getProduct(productId){
        let itemProduct=this.products.find(itemProduct=>itemProduct.productId===productId);
        return itemProduct;
}

findProduct(){
    for( let each of this.products){
    console.log(`${each.name},${each.price}`);
}
}
calOrderCost(productId,quantity){
 let orderCost=this.products.find(orderCost=>orderCost.productId===productId);
 return orderCost.price*quantity;
}
}
var mkulima =new Mkulima([],[],[],[])
console.log(mkulima.addFarm(0167,"Mshamba","Waweru","0710243546","Nyeri"))
console.log(mkulima.addFarm(0456,"Nyongesa","Mkulima","0745678902","Bungoma"))
console.log(mkulima.addFarm(0890,"Magode","Moraya","073546758","Siaya"))
console.log(mkulima.removeFarm(0167))
console.log(mkulima.updateFarm(0176,"Zealous","Zillah","0728372027","Thika"))
console.log(mkulima.getFarm(0456))

//MYProducts
console.log(mkulima.addProduct("fruit456","Passion",7400))
console.log(mkulima.addProduct("beverage01","Coffee",16000))
console.log(mkulima.addProduct("veg78","Spinach",4000))
console.log(mkulima.removeProduct("fruit456"))
console.log(mkulima.getProduct("veg78"))
console.log(mkulima.calOrderCost("beverage01",4))




