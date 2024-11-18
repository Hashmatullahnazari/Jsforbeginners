function checkHomeworkStatus(homeworkDone) {
  if(homeworkDone) {
    return"Great job! Your homework is complete and ready to submit";
  } else {
    return"Don't forget to finish your homework before the deadline!";
  }
}

console.log(checkHomeworkStatus(false));
console.log(checkHomeworkStatus(true));


function checkCarMaintenaceStatus(oilChanged){
if (oilChanged){
  return"Your car's oil has been chenged. It's ready for the road!"
} else
{
  return"Your car needs an oil change soon. Schedule a service!"
}
}

console.log(checkCarMaintenaceStatus(false));
console.log(checkCarMaintenaceStatus(true));
