function Calcular() {
var vr1 = document.getElementById('t1').value;
var vr2 = document.getElementById('t2').value;
var vr3 = document.getElementById('t3').value;
var vr4 = document.getElementById('t4').value;
var vr5 = document.getElementById('t5').value;
var p = (parseFloat(vr1)+parseFloat(vr2)+parseFloat(vr3)+parseFloat(vr4)+parseFloat(vr5))/5; document.getElementById('promedio').innerHTML = p;
}
