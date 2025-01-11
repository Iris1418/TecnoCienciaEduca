//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=30; timeIni=30; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=8; scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFF80"; colorButton="#818640"; colorText="#000000"; colorSele="#80FF00";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=30;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Excelente trabajo"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts="Intenta de nuevo"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["TUlDUk9TQ09QSU8=","U0lNVUxBQ0nDk04=","Uk9Cw5NUSUNBOg==","RU5FUkfDjUE=","QklPU0ZFUkE=","RElHSVRBTElaQUNJw5NOOg==","SU5OT1ZBQ0nDk046","RVhQRVJJTUVOVE8=","",""];imaW=["0_microscopio-2-e1550968251461.jpg","","0_y.jpeg","0_._.jpeg","0_images__8_.jpeg","0_descarga__7_.jpeg","","","",""];queW=["Herramienta que amplía la visión de organismos pequeños.","Representación digital de fenómenos naturales.","Uso de máquinas programables para realizar tareas.","Capacidad para realizar trabajo o causar cambios.","Parte del planeta donde habitan los seres vivos.","Transformación de información física en digital.","Introducción de algo nuevo para mejorar procesos.","Procedimiento para probar una hipótesis científica.","",""];var wordsL=[11,10,9,7,8,15,11,11,"",""];var altW=["","","","","","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ: "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var alterW=[];var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="index_resources/media/"; textBNext="";
