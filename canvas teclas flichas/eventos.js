var teclas={
  UP:38,
  DOWN:40,
  LEFT:37,
  RIGHT:39
  };
  console.log(teclas);

  document.addEventListener("keyup",dibujarConTeclado);
  var cuadro = document.getElementById("area");
  var papel = cuadro.getContext("2d");
  var x=150;
  var y=150;
dibujarLinea("red",149,149,151,151,papel);

function dibujarLinea(color, xinicial ,yinicial, xfinal, yfinal,lienzo )
{
  lienzo.beginPath();
  lienzo.strokeStyle=color;
  lienzo.lineWidth=5;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}


function dibujarConTeclado(evento)
{
var colorcito="blue";
var movimiento=10;
switch (evento.keyCode)
 {
  case teclas.DOWN:
    console.log("abajo");
    dibujarLinea(colorcito,x,y,x,y+movimiento,papel);
    y=y+movimiento;
    break;
  case teclas.UP:
      console.log("arriba");
      dibujarLinea(colorcito,x,y,x,y-movimiento,papel);
      y=y-movimiento;

      break;
  case teclas.LEFT:
      console.log("Izquierda");
      dibujarLinea(colorcito,x,y,x-movimiento,y,papel);
      x=x-movimiento;
      break;
  case teclas.RIGHT:
      console.log("Derecha");
      dibujarLinea(colorcito,x,y,x+movimiento,y,papel);
      x=x+movimiento;
      break;
  default:
      console.log("otra tecla");
      /*
      para dibujar con el mouse
mousedown eventos
mouseup
usar console
objetos?document
coordendas difirentres
operaciopnes matematicas para coordendas
*/
}

}
