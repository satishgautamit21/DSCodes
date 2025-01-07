class SortedArrayMerger {
    constructor() {
        this.arr = []
    }
    merge(arr1: number[], arr2: number[]): number[] {
       let i=0;
       let j=0;
       while(i<arr1.length && j<arr2.length){
           if(arr1[i]<arr2[j]){
               this.arr.push(arr1[i]);
               i++;
           }else{
               this.arr.push(arr2[j]);
               j++;
           }
       }
       while(i<arr1.length){
           this.arr.push(arr1[i]);
           i++;
       }
       while(j<arr2.length){
           this.arr.push(arr2[j]);
           j++; 
       }
       return this.arr
    }
}