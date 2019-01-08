/*
codigo invocador al aleatorio
var z;
for(var i=0;i<10;i++)
{
z=aleatorio(-5,5);
document.write(z + " , ");

}
*/
var vp=document.getElementById("granja");
var papel=vp.getContext("2d");
var mapa="tile.png";

var fondo=new Image();
fondo.src=mapa;
fondo.addEventListener("load",dibujar);

var vaca=new Image();
vaca.src="vaca.png";
vaca.addEventListener("load",dibujarVacas);


var cerdo=new Image();
cerdo.src="cerdo.png";
cerdo.addEventListener("load",dibujarCerdo);

var pollo=new Image();
pollo.src="pollo.png";
pollo.addEventListener("load",dibujarPollo);

function dibujar()
{

  papel.drawImage(fondo,0,0);

}

function dibujarVacas()
{

  papel.drawImage(vaca,10,10);

}

function dibujarCerdo()
{

  papel.drawImage(cerdo,10,300);

}


function dibujarPollo()
{

  papel.drawImage(pollo,300,150);

}






function aleatorio(min,maxi)
{
var resultado;
resultado=Math.floor(Math.random()*(maxi - min + 1))+min;
return resultado;

}
