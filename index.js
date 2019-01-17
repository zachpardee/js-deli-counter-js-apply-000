i = 0;

function takeANumber(anArray){
  i++;
  return i;
}

takeANumber(line) -> 1 
takeANumber(line) -> 2 
nowServing(line) -> 1 
nowServing(line) -> 2 
takeANumber(line) -> 3 

function nowServing(katzDeliLine){
    if(katzDeliLine.length === 0) {
      return "There is nobody waiting to be served!";
  } 
    else {
      return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(currentLineOfPeople){
  if (currentLineOfPeople.length === 0){
    return "The line is currently empty.";
  }
  
  var arrayOfNamesAndNumber = [];
  
    for(var i=0; i<currentLineOfPeople.length; i++) {
    arrayOfNamesAndNumber.push(i+1 + ". "+ currentLineOfPeople[i]);
    arrayOfNamesAndNumber.push(`${i+1}. ${currentLineOfPeople[i]}`);
  }
  
  return "The line is currently: " + arrayOfNamesAndNumber.join(', ');
}