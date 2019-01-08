
var texto=document.getElementById("texto_lineas");
var boton=document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);


var d=document.getElementById("dibujito");
var ancho=d.width;

var lienzo=d.getContext("2d");
console.log(lienzo);


function dibujarLinea(color, xinicial ,yinicial, xfinal, yfinal )
{
  lienzo.beginPath();
  lienzo.strokeStyle=color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}


function dibujoPorClick()
{
var x=parseInt(texto.value);



var linea=x;
var l=0;
var yi;
var xf;
var color1="#FAA";
var espacio=ancho/linea;
while(l<linea)
{
yi=espacio*l;
xf=espacio*(l+1);
dibujarLinea(color1,0,yi,xf,300);
l++;
}

dibujarLinea(color1,1,1,1,299);
dibujarLinea(color1,1,299,299,299);



}
