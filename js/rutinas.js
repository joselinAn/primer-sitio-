/*PARA RECUPERAR EL RUT */
function mensaje(){
    alert('Hola Mundo');
}
function formulario(){
    var nombre=document.getElementById("txtNom").value;
    var rut=document.getElementById("txtRut").value;
    var largo=rut.length;
    if (largo!=8) {
        alert("rut mal ingresado");
        return;
    }
    var suma=0;var mult=3;
    for (var index = 0; index < 8; index++) {
        var caracter=rut.substring(index,index+1);
        suma=suma+(parseInt(caracter)*mult);
        mult--;
        /*con este if devuelvo a 7 el rut */
        if (mult==1) {
            mult=7;
        }        
        
    }
    /*alert("suma:"+suma);    NO ES NECESARIA*/
    var dv=(11-(suma % 11));
    if(dv==10){
        alert("k");
        return;
    }
    if(dv==11){
        alert(0);
        return;
    }
   /* alert("Digito:"+(11-(suma % 11)));*/
   alert(dv)
}