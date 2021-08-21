// soal 2
// Buatlah sebuah array yang berisi angka-angka. Berikan output yang berisi jumlah dari semua angka di dalam array tersebut, dan ketika
// jumlahnya lebih dari 30, tambahkan kata “It’s big!”
// Misal:
// array
// let arr = [1,3,5,7,8];
// output
// 24
// array
// let arr = [6,10,4,6,9];
//output
// 35
// It’s big!

let arr = [1,3,5,7,8];
var total=0;

    for(let i=0; i<arr.length; i++){   
        total += arr[i];    
    }
    console.log(total)
    if(total > 30){
        console.log('It’s big!')
    }

let arr2 = [6,10,4,6,9];
var total=0;

    for(let i=0; i<arr2.length; i++){   
        total += arr2[i];    
    }
    console.log(total)
    if(total > 30){
        console.log('It’s big!')
    }