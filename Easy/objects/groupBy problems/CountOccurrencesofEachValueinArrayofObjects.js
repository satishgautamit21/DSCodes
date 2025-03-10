function countOccurrencesOfEachValueInArrayofObjects(arr, key) {
   const grouped = {};
   for (let obj of arr) {
      const group = obj[key];
      if (!grouped[group]) {
         grouped[group] = 0;
      }
      grouped[group]++;
   }    
   return grouped;
}