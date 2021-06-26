function Calcular() {
var vr1 = document.getElementById('t1').value;
var p = (parseFloat(vr1))+273.15 + " K y " + ((( (parseFloat(vr1))*9)/5)+32) + " °F." ; document.getElementById('promedio').innerHTML = p;
}
