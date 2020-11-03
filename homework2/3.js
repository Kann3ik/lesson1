var a = +prompt('Введите а = ');
var b = +prompt('Введите b = ');

if(a >= 0 && b >= 0){
    alert(a - b);
}
else if(a < 0 && b < 0){
    alert(a * b);
}
else{
    alert(a + b);
}