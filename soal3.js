/* Soal 3
// array
// let arr = [1,7,4,5,3];
// output
// 1
// 7
// array
// let arr = [6,10,4,6,9];
//output
// 4
*/ 10

let nilai = [6,10,4,6,9];

for(var i=0;i<nilai.length;i++){
        {  
             if(i == 0)
             { 
              var nilai_mak = nilai[i];
             }
             else if ( nilai[i] > nilai_mak){
                     nilai_mak = nilai[i];
             }
        } 
            {  
                 if(i == 0)
                 { 
                  var nilai_min = nilai[i];
                 }
                 else if ( nilai[i] < nilai_min){
                         nilai_min = nilai[i];
                 }
            }
} 

console.log(nilai_min);
console.log(nilai_mak);