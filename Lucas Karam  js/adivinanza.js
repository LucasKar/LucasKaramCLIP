let rtac="Adolphe Sax";
c=3;
let ayuda="";

function adivinanza(){
       
   if(document.getElementById("rta").value===rtac)
{
document.getElementById("c").innerHTML="¡¡Respuesta Correcta!!";
document.getElementById("boton").disabled=true;
document.getElementById("rta").disabled=true;
}
else
{
    if(c >= 3)
    {
        c--;
document.getElementById("c").innerHTML="Le quedan " + (c+1) + " intentos.";
document.getElementById("mensaje").innerHTML="Respuesta Incorrecta"
    }
    else
    {
    if (c == 2)   
    {
        c--;
document.getElementById("c").innerHTML="Le quedan " + (c+1) + " intentos.";
document.getElementById("mensaje").innerHTML="Respuesta Incorrecta"
document.getElementById("ayuda").innerHTML="Ayuda:" +" "+ "Su apellido son las primeras letras del nombre del instrumento."
    }
    else
    {
        if (c == 1)
        {
            c--;
            document.getElementById("c").innerHTML="Le quedan " + (c+1) + " intentos.";
            document.getElementById("mensaje").innerHTML="Respuesta Incorrecta"
            document.getElementById("ayuda").innerHTML="Ayuda:" +" "+ "Su nombre es como el nombre en inglés del lider del <b>Partido nacionalsocialista obrero aleman</Ayuda:> y una <b>famosa constante matemática</b> juntos."
        }
        else
        {
            if (c == 0)
            {
            c--;
            document.getElementById("boton").disabled=true;
            document.getElementById("rta").disabled=true;
            document.getElementById("c").innerHTML="Respuesta incorrecta. No quedan mas intentos.";
            document.getElementById("mensaje").innerHTML="La respuesta correcta es:" + " " + rtac;
            }
        }
    }
    }
}
}

