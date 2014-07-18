/**
 * Created by olivier on 18/07/14.
 */

//DEFI ACCEPTER : METTRE UN GOTO :).
function Goto(valeur){
    var debuturl = window.location.origin;
    switch(valeur){
        case 1:window.location=debuturl+"/Professionnel.html";break;
        case 2:window.location=debuturl+"/Piano.html";break;
        case 3:window.location=debuturl+"/News.html";break;
        default: windows.location=debuturl;
    }
}

