function convert(){
    var c= window.document.forms[0].celsius.value;
    var f=c*9/5 +32;
    document.getElementById("fahrenheit").value=f;
}
