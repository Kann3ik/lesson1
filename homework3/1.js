let n = 100;
let i = 0;

Prime:
while(i < n){
    i++;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue Prime;
    }
    
    console.log(i);
}
