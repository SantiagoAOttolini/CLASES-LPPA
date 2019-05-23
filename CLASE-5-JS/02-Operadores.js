// comenterio de linea
/*
miltilinea
comentario
*/

var a = 5;
var A = 8;
var b = 10;

console.log(a, A, b);
console.log(a+b, a-b, a/b, a*b, a%b);

var c = true;
var d = false;

console.log(c||c, d||c, c||d, d||d);
console.log(c&&c, c&&d, d&&d, d&&c);
console.log(a||a, b||a, a||b, b||a);
console.log(a&&a, a&&b, b&&b, b&&a);

var e = 0;
var f = -1;

console.log(e||e, f||e, e||f, f||e);
console.log(e&&e, e&&f, f&&f, f&&e);

console.log(0==false, ''==false, undefined==false, null==false, {}==false, []==false);

console.log(0===false, ''===false, undefined===false, null===false, {}===false, []===false);

console.log(typeof null, typeof undefined, typeof "", typeof false, typeof {}, typeof [], typeof function(){});