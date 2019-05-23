console.log('hi');

var canvas,player, enemy;
var follow = function(evt){/*event = evt */

console.log(evt.offsetX, evt.offsetY)
player.style.left  = evt.offsetX + 'px';
player.style.top  = evt.offsetY + 'px';
}

window.onload = function()/*instancia del naegador, onload guarda una funcion no ejecutada sin nombre para que cuando la pagina se termine de cargar se ejecute la funcion que esta adentro*/ 
{ 
console.log('dom ready');
 canvas = document.getElementById('canvas');  /*doument is the body of html */
 player = document.getElementsByClassName('player')[0];/*always array*/ 
 enemy = document.getElementsByClassName('enemy')[0];

canvas.onmousemove= follow;
}

