var pitaya1 = {}

var pitaya2 = {
    name:"火龙果",
    price:15,
    origin:"海南省",
    weight:"1",
    nut:{
        name:"火龙果 nut"
    }
    printName:function(){
        console.log(this.name)
    }
}
pitaya2.printName();
pitaya2["printName"]()

function Haw(name,price,arigin){
    this.name = name;
    this.price=price;
    this.origin=origin;
    this.printName=function(){
        console.log("this is Haw")
    }
}



var h1 = new Haw("山楂",2,"河南省");



hi.printName()
h2.printPrice()

Haw.prototype.printPrice = function(){
    console.log("prototype price Price")
}





