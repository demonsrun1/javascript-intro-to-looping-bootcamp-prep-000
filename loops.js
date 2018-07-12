function forLoop(arr1){
  for(i = 0; i < 25; i++){
    if(i === 1) {
      arr1.push("I am 1 strange loop");
    }
    else{
      arr1.push( `I am ${i} strange loops.`);
    }
  }
  return arr1;
}

function whileLoop(num){
  let countdown = num;
  while(countdown > 0){
    console.log(--countdown);
  }
  return "done";
}
