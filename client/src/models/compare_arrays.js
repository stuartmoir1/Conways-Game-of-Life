export const compareArrays = (arr1, arr2) => {
  //console.log('compareArrays...')
  
  for (let i = 0; i < arr1.length - 1; i++){
    //console.log(arr1[i], arr2[i])
    if (arr1[i] !== arr2[i]){
      return false
    }
  }
  return true
}