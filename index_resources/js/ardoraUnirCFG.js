//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=30; timeIni=30; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#800040"; colorText="#000000"; colorSele="#FF8000";colorLeave="#000000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=20;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="EXCELENTE"; messageTime="CULMINO TU TIEMPO"; messageError=""; messageErrorG=""; messageAttempts="LIMITE DE TIEMPO"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["Rm90b3PDrW50ZXNpcw==", "UHJvY2VzbyBxdWUgdHJhbnNmb3JtYSBlbmVyZ8OtYSBzb2xhciBlbiBhbGltZW50bw=="],["Rm90b3PDrW50ZXNpcw==", "UHJvY2VzbyBxdWUgdHJhbnNmb3JtYSBlbmVyZ8OtYSBzb2xhciBlbiBhbGltZW50bw=="],["T3jDrWdlbm8=", "R2FzIGVzZW5jaWFsIHBhcmEgbGEgcmVzcGlyYWNpw7Nu"],["Q2xvcm9maWxh", "UGlnbWVudG8gcXVlIGRhIGNvbG9yIHZlcmRlIGEgbGFzIHBsYW50YXM="],["QXRtw7NzZmVyYQ==", "Q2FwYSBkZSBnYXNlcyBxdWUgcm9kZWEgbGEgVGllcnJh"],["TnV0cmllbnRlcw==", "U3VzdGFuY2lhcyBuZWNlc2FyaWFzIHBhcmEgZWwgY3JlY2ltaWVudG8="],["RWNvc2lzdGVtYQ==", "SW50ZXJhY2Npw7NuIGVudHJlIHNlcmVzIHZpdm9zIHkgc3UgZW50b3Jubw=="],["QmlvZGl2ZXJzaWRhZA==", "VmFyaWVkYWQgZGUgZXNwZWNpZXMgZW4gdW4gw6FyZWE="]];
var c=[[12,48],[12,48],[7,32],[9,41],[9,33],[10,41],[10,42],[13,31]];
var con1=["Fotosíntesis","Ecosistema","Clorofila","Biodiversidad","Atmósfera","Nutrientes","Oxígeno","Ciclo del Agua"];
var con2=["Proceso que transforma energía solar en alimento","Variedad de especies en un área","Capa de gases que rodea la Tierra","Movimiento continuo del agua en el planeta","Interacción entre seres vivos y su entorno","Gas esencial para la respiración","Sustancias necesarias para el crecimiento","Pigmento que da color verde a las plantas"];
var sel1=""; join1=[]; join2=[];
