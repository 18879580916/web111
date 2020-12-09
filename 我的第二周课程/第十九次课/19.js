+function (){
    console.log("this is pitaya")
}()

console.log((function(x){
    console.log("this is pitaya2")
    return x
})(888))


;(console.log(1000/function(){console.log("this is anonymous function "); return
function(){return 2000/2}()}()))