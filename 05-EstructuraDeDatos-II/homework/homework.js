"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
  this.size = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value){
  var newNode = new Node(value);
  var current = this.head;
  //pregunto si la lista está vacía 
  if (!current){
      this.head = newNode;
      this.size++;
      return newNode;
  }
  //Si no está vacía, pregunto hasta encontrar un espacio vacío
  //o un "next que sea null"
  while (current.next){
      current = current.next;
  }
  //Cuando encuentre el objeto vacío le agrego el nodo a la 
  //referencia
  current.next = newNode;
  this.size++;
  return newNode;
}

LinkedList.prototype.remove = function (){
  //inicializo una variable que almacenará el nodo buscado
  var lastNode = {}; 
  var current = this.head;
  var previousNode = null;
  if(this.size === 0){
    return null;
  }
  if(this.size === 1){
    this.head = null;
    this.size--;
    return current.value;
  }
  //busco el ultimo nodo y el nodo previo al último 
  while (current.next){
    previousNode = current;
    current = current.next;
  }
  //cuando lo encuentro, lo almaceno en lastNode antes 
  //de eliminarlo
  lastNode = current;
  previousNode.next = null;
  this.size--;
  return lastNode.value;
}

LinkedList.prototype.search = function (cb){
  var current = this.head;
  if(this.size <= 0){
    return null;
  }
  else {  
    if (typeof cb !== "function"){
      while(current.value !== cb){
       current = current.next;
         if(!current){
         return null;
         } 
      }
      return current.value;
    }
    else {
      while(!cb(current.value)){
        current = current.next;
          if(!current){
          return null;
          } 
       }
       return current.value;
    }
  }
}

/*var Espar = function(arg){
  var resto = arg %2;
  return (!resto);
}

console.log(typeof Espar === "function")
const miList = new LinkedList();
console.log(miList);
console.log(miList.search(7)); 
miList.add(11);
miList.add(77);
miList.add(83);
console.log(miList);
console.log(miList.search(Espar));
console.log(miList.remove());
console.log(miList);
miList.add(10);
console.log(miList);
console.log(miList.search(10)); 
console.log(miList.remove());
console.log(miList);
miList.add(15);
console.log(miList);
miList.add(7);
console.log(miList);
miList.search(7);
console.log(miList.remove());
console.log(miList);
console.log(miList.remove());
console.log(miList); */



/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;
  this.arr = new Array(35);
}

HashTable.prototype.hash = function(key){
var suma = 0;
  for(let i=0; i<key.length; i++){
    suma = key.charCodeAt(i) + suma;
  }
 return suma%(this.arr.length); 
}

HashTable.prototype.set = function(key ,value){
  var i = this.hash(key);
    if(typeof key === "string"){
      if(!this.arr[i]){
        this.arr[i]={};
      }
      this.arr[i][key] = value;//esto maneja colisiones
    } 
    else {
      throw TypeError('Keys must be strings');
    }
}

HashTable.prototype.get = function(key){
const index = this.hash(key);
const bucket = this.arr[index];
  if(bucket){                         
    return bucket[key];
  }
  else {
    return null;
  }
}

HashTable.prototype.hasKey = function(key){
   if(this.get(key)){
    return true;
   }
   else {return false}
}


console.log(!!undefined);
const miHashtable = new HashTable();
console.log(miHashtable);
miHashtable.set("FullStack", "Alexsandro");
console.log(miHashtable);
miHashtable.set("Bailarina", "Juana");
miHashtable.set("Instructor", "Jorge");
miHashtable.set("Instructor", "Tony");
miHashtable.set("foo", "Tony");
console.log(miHashtable);
console.log(miHashtable.get("FullStack"));
console.log(miHashtable.hasKey("FullStack"));
console.log(miHashtable.hasKey("Instructor"));
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
