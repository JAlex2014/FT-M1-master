"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
BinarySearchTree.prototype.size = function(){
  let count = 0;
  count++; //el nodo se suma a sí mismo
  if(this.left){//si tengo algo a la izquierda, sumar todo lo de la izquierda
    count = count + this.left.size();
  }
  if(this.right){
  count = count + this.right.size();
  }
  return count;
}

BinarySearchTree.prototype.insert = function(value){
  if(value < this.value){ //vamos a la izquierda
    if(this.left){//preguntamos si hay algo
      this.left.insert(value);
    }else {//si no, insertamos el nuevo arbol/nodo
      this.left = new BinarySearchTree(value)
    }
  }
  if(value > this.value){
    if(this.right){//preguntamos si hay algo
      this.right.insert(value);
    }else {//si no, insertamos el nuevo arbol/nodo
      this.right = new BinarySearchTree(value)
    }
  }
  return false;
} 

BinarySearchTree.prototype.contains = function(value){
  if(this.value===value){
    return true;
  }
  if(value < this.value && this.left){
    if(this.left.contains(value)) return true;
  }
  if(value > this.value && this.right){
    if(this.right.contains(value)) return true;
  }
  return false;
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, type){
switch (type){
  case "pre-order":
    cb(this.value);
    if(this.left) this.left.depthFirstForEach(cb,type);
    if(this.right) this.right.depthFirstForEach(cb,type);
    break;
  case "post-order":
    if(this.left) this.left.depthFirstForEach(cb,type);
    if(this.right) this.right.depthFirstForEach(cb,type);
    cb(this.value);
    break;
  default:
    if(this.left) this.left.depthFirstForEach(cb,type);
    cb(this.value);
    if(this.right) this.right.depthFirstForEach(cb,type);
    break;
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, pend){
  if (!pend){
    var pend = [];
  }
  cb (this.value);

  if(this.left) pend.push(this.left);
  if (this.right) pend.push(this.right);

  if(pend.length > 0) pend.shift().breadthFirstForEach(cb, pend);
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};

const miArbol = new BinarySearchTree(10);
console.log(miArbol);
miArbol.insert(5);
console.log(miArbol);
miArbol.insert(11);
console.log(miArbol);
miArbol.insert(3);
console.log(miArbol);
console.log(miArbol.size());
console.log(miArbol.contains(5));