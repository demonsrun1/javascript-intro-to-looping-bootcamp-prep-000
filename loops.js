function forLoop(arr1){
  for(i = 0; i < 25; i++){
    if(i === 1) {
      arr1.push("I am 1 strange loop");
    }
    else{
      return `I am ${i} strange loops.`;
    }
  }
  return arr1;
}
