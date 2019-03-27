"use strict";

function f() {
  var x = 1;
  var y = 2;
  var z = 3;
  {
    var x = 100;
    var _y = 200;
    var _z = 300;
    console.log('x in block scope is', x);
    console.log('y in block scope is', _y);
    console.log('z in block scope is', _z);
  }
  console.log('x outside of block scope is', x);
  console.log('y outside of block scope is', y);
  console.log('z outside of block scope is', z);
}

f();