function calcular(){

var valorGas = parseFloat(gas.value);
var valorEta = parseFloat(eta.value);


var custo = (valorEta/valorGas);

alert(custo);

if(custo>0.7){
    alert("Compensa abastecer gasolina");
}
if(custo<0.7){
    alert("Use alcool");
}
 
if(custo==0.7){
    alert("Tanto faz");
}









}
   