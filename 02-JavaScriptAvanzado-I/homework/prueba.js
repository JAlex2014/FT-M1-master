//javascript 
// cuando se declara una variable con var se instancia esa variable en el entorno global al que pertenezca, 
// es decir puede pertecer al global de la consola o menos jerarquico como al globla de una funcion.
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // 10 //
  console.log(a); // 8 por el hoisting //
  var f = function(a, b, c) {
    b = a;
    console.log(b); // xq b = a = 8 por el hoisting //
    b = c;
    var x = 5;
  }
  f(a,b,c);
  //console.log(f(a,b,c)) sale undefined 
  console.log(b); // 9 por el hoisting
}
c(8,9,10); // 10 , 5 
console.log(b); // 10
console.log(x); // 1
// javascript

//javascript
console.log(bar); //undefined ?
//console.log(baz); //no esta definido 
foo();  //"undefined"
//console.log(foo());
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;

//javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); //Franco

//javascript
var instructor = "Tony";
console.log(instructor); //"Tony"
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //"Franco"
   }
})();
console.log(instructor); // "Tony"

//javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); //"The Flash"
    console.log(pm); //"Reverse Flash"
}
console.log(instructor); //"The Flash"
console.log(pm); //"Franco"


console.log(6 / "3");  //2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); //"9px"
console.log("$" + 4 + 5); //"$45"
console.log("4" - 2); //2
console.log("4px" - 2); //NaN
console.log(7 / 0); //infinito
console.log({}[0]); //undefined
console.log(parseInt("09")); //9
console.log(5 && 2); //2
console.log(2 && 5); //5
console.log(5 || 0); //5
console.log(0 || 5); //5
console.log([3]+[3]-[10]);//23
console.log(3>2>1); //false
console.log([] == ![]); //true

//javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test(); //2
//console.log(test()); da undefined

//```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);

console.log(getFood(false)) //undefined

//javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());


function crearContador(){
   var count = 0;
   return function(){
      count++;
      return count;
   };
   return count;
}

var contador1 = crearContador();
console.log(contador1());
console.log(contador1());
console.log(contador1());
console.log(contador1());

/*

function contarOvejas(ovejas) {
   // aquí tu magia
   var ovejasfiltradas = [];
   for(let j = 0; j < ovejas.length; j++){
     if(ovejas[j].color === 'rojo'){
       for(let i = 0; i < ovejas[j].name.length; i++){
         if(ovejas[j].name[i].toUpperCase()==="N"){ 
           for(let z = 0; z < ovejas[j].name.length; z++){
             if(ovejas[j].name[z].toUpperCase()==="A"){
             ovejasfiltradas.push(ovejas[j]);
             z = ovejas[j].name.length;
             }
           }
         } 
       }
     }
   } 
   return ovejasfiltradas;
 }

 const ovejas = [
   { name: 'Noa', color: 'azul' },
   { name: 'Euge', color: 'rojo' },
   { name: 'Navidad', color: 'rojo' },
   { name: 'Ki Na Ma', color: 'rojo'},
   { name: 'AAAAAaaaaa', color: 'rojo' },
   { name: 'Nnnnnnnn', color: 'rojo'}
 ]

 const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas);*/