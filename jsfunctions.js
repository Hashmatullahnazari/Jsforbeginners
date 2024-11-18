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


function checkLaundryStatus(laundryDone){
  if(laundryDone) {
    return"All clothes are clean and folded. Great job!";
  } else 
  {
    return"There's laundry waiting to be done. Time to wash!"
  }
}
console.log(checkLaundryStatus(false));
console.log(checkLaundryStatus(true));



function checkEmailStatus(inboxCleared){
  if(inboxCleared){
    return"Your inbox is all caught up. Well done!";
  } else {
    return"You have unread emails. Time to check your inbox!";
  }
}
console.log(checkEmailStatus(false));
console.log(checkEmailStatus(true));
