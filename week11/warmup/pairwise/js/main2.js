function pairwise(arr, arg) {
 var sum = 0;
 for(i = 0; i < arr.length; i++) {
   for(j = i + 1; j < arr.length; j++) {
     if(arr[i] + arr[j] == arg) {
       sum += i + j;
       arr[i] = arr[j] = NaN;
     }
   }
 }
 return sum;
}
console.log(pairwise([7, 9, 11, 13, 15], 20))
