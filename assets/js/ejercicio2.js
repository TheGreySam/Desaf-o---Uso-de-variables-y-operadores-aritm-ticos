function Calcular() {
var vr1 = document.getElementById('t1').value;
var vr2 = document.getElementById('t2').value;
var p = "Suma = " + (parseInt(vr1) + parseInt(vr2))
   + " , Rema = " + (parseInt(vr1) - parseInt(vr2))
   + " , División = " + (parseInt(vr1) / parseInt(vr2))
   + " , Multiplicación = " + (parseInt(vr1) * parseInt(vr2))
   + " , Módulo = " + (parseInt(vr1) % parseInt(vr2))
; document.getElementById('promedio').innerHTML = p;
}
