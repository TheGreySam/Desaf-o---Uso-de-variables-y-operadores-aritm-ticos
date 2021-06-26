function Calcular() {
var vr1 = document.getElementById('t1').value;
var p = (parseFloat(vr1))/365 + " años, " + (parseFloat(vr1))/7 + " semanas y " + (parseFloat(vr1))/1 + " días."; document.getElementById('promedio').innerHTML = p;
}
