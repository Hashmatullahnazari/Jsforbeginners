// let laundryDone = true;
// let clothesFolded = false;
// let clothesPutAway = false;

// if (laundryDone && clothesFolded && clothesPutAway){
//     console.log("Great, the laundry process is completey done");
// } else if (clothesFolded && clothesPutAway){
//     console.log("Laundry is done and folded. Time to put the clothes away!");
// } else if (laundryDone){
//     console.log("Laundry is done. Time to fold the clothes!");
// } else {
//     console.log("Time to start Laundry");
// }

// console.log("\nfolding clothes...");
// clothesFolded = true;

// if (laundryDone && clothesFolded && clothesPutAway){
//     console.log("Great, the laundry process is completely done");
// } else if (laundryDone && clothesFolded){
//     console.log("Laundry is done and folded. Time to put the clothes away!");
// } else if (laundryDone){
// console.log("Laundry is done. Time to fold the clothes");
// } else {
//     console.log("Time to start the laundry.");
// }

// console.log("\nputting away clothes...");
// clothesPutAway = true;

// if (laundryDone && clothesFolded && clothesPutAway){
//     console.log("Great, the laundry process is completely done!");
// }else if (laundryDone && clothesFolded){
//     console.log("Laundry is done and folded. Time to put the clothes away!");
// }else if(laundryDone){
// console.log("Laundry is done. Time time to fold the clothes!");
// } else {
//     console.log("Time to Start Laundry.");
// }


// let dishesCleaned = false;
// let dishesRinsed = false;
// let dishesDried = false;

// console.log("Initial state");
// if (dishesCleaned && dishesRinsed && dishesDried) {
//   console.log("Great all the dishes are clean, rinsed, and dried!");
// } else if (dishesCleaned && dishesRinsed) {
//   console.log("Dishes are claened and rinsed. Time to dry them!");
// } else if (dishesCleaned){
//   console.log("Dishes are cleaned. Time to rines them!");
// } else {
//     console.log("Time to start washing the dishes");
// }


// console.log("\nCleaning dishes...");
// dishesCleaned = true;

// console.log("After Cleaning:");

// if(dishesCleaned && dishesRinsed && dishesDried) {
//     console.log("Great all dishes are clean, rinsed, dried!");
// } else if (dishesRinsed && dishesDried) {
//     console.log("Dishes are cleaned and rinsed. Time to dry them");
// } else if(dishesCleaned){
//     console.log("dishes are cleaned. Time to rinse them");
// } else {
//     console.log("Time to start washing the dishes");
// }

// console.log("\nRinsing dishes...");
// dishesRinsed = true;

// console.log("After rinsing:");

// if (dishesCleaned && dishesRinsed && dishesDried) {
//   console.log("Great all the dishes are clean, rinsed, dried!");
// } else if (dishesCleaned && dishesRinsed) {
//   console.log("Dishes are cleaned and rinsed. Time to dry them!");
// } else if (dishesCleaned) {
//     console.log("dishes are cleaned. Time to rinse them");
// } else {
//   console.log("Time to start washing the dishes");
// }

// console.log("\nDrying dishes...");
// dishesDried = true;

// console.log("Final state:");

// if (dishesCleaned && dishesRinsed && dishesDried) {
//   console.log("Great all the dishes are clean, rinsed, and dried!");
// } else if (dishesCleaned && dishesRinsed) {
//   console.log("Dishes are cleaned and rinsed. Time to dry them!");
// } else if (dishesCleaned){
//   console.log("Dishes are cleaned. Time to rinse them!");
// } else {
//     console.log("Time to start wasing the dishes");
// }


// let livingRoomVacuumed = false;
// let bedroomVacuumed = false;
// let hallwayVacuumed = false;

// console.log("Initial state");

// if (livingRoomVacuumed && bedroomVacuumed && hallwayVacuumed) {
//   console.log("Great, all areas are vacuumed!");
// } else if (livingRoomVacuumed && bedroomVacuumed) {
//   console.log("Living room and bedroom are done. Time to vacuum the hallway!");
// } else if (livingRoomVacuumed) {
//     console.log("Living room is vacuumed. moving on to the bedroom!");
//   } else {
//   console.log("Time to start vacuuming. Let's begin with the living room!");
// }

// console.log("\n Vacuuming the living room...");
// livingRoomVacuumed = true;

// console.log("After vacuuming the living room:");
// if (livingRoomVacuumed && bedroomVacuumed && hallwayVacuumed) {
//   console.log("Great, all areas are vacuumed");
// } else if (livingRoomVacuumed && bedroomVacuumed) {
//   console.log("living room and bedroom are done. Time to vacuum the hallway!");
// } else if (livingRoomVacuumed) {
//     console.log("Living room is vacuumed moving to the bedroom!");
//   }else {
//   console.log("Time to start vacuuming. Let's being with the living room!");
// }

// console.log("\nVacuuming the bedroom...");
// bedroomVacuumed = true;

// console.log("After vacuuming the bedroom:");
// if (livingRoomVacuumed && bedroomVacuumed && hallwayVacuumed) {
//   console.log("Great, all areas are vacuumed");
// } else if (livingRoomVacuumed && bedroomVacuumed) {
//   console.log("Living room and bedroom are done. Time to vacuum the hallway!");
// } else if (livingRoomVacuumed) {
//     console.log("Living is vacuumed. Moving to the bedroom!");
//   } else {
//   console.log("Time to start vacuuming. Let's begin with the living room!");
// }

// console.log("\nVacuuming the hallway ...");
// hallwayVacuumed = true;

// console.log("final state:");

// if (livingRoomVacuumed && bedroomVacuumed && hallwayVacuumed) {
//   console.log("Great, all areas are vacuumed");
// } else if (livingRoomVacuumed && bedroomVacuumed) {
//   console.log("Living room and bedroom are done. Time to vacuum the hallway!");
// } else if (livingRoomVacuumed) {
//     console.log("Living room is vacuumed. moving to bedroom!");
//   } else {
//   console.log("TIme to start vacuuming. Let's begin with the living room!");
// }

let shelvesDusted = false;
let furnitureDusted = false;
let blindDusted = false;

console.log("Initial state:");
if (shelvesDusted && furnitureDusted && blindDusted) {
  console.log("Excellent! All dusting tasks are complete.");
} else if (shelvesDusted && furnitureDusted) {
    console.log("Shelves and furniture are dusted. Time to dust the blinds");
  }  else if (shelvesDusted) {
    console.log("shelves are dusted. Let's move on to the furniture!");
  } else {
  console.log("Time to start dusting. Let's begin with the shelves!");
}


console.log("\nDusting the shelves...");
shelvesDusted = true;

console.log("After dusting the shelves:");
if (shelvesDusted && furnitureDusted && blindDusted) {
  console.log("Excellent! All dusting tasks are complete.");
} else if (shelvesDusted && furnitureDusted) {
  console.log("Shelves and furniture are dusted. Time to dust the blinds");
} else if (shelvesDusted) {
  console.log("shelves are dusted. Let's move on to the furniture!");
}else {
  console.log("Time to start dusting. Let's begin with shelves!");
}

console.log("\Dusting the furniture...");
furnitureDusted = true;

console.log("After dusting the furniture");
if (shelvesDusted && furnitureDusted && blindDusted) {
  console.log("Excellent! All dusting tasks are complete.");
} else if (shelvesDusted && furnitureDusted) {
  console.log("Shelves and furniture are dusted. Time to dust the blinds!");
} else if (shelvesDusted) {
  console.log("shelves are dusted. let's move on to the furniture");
}else {
  console.log("Time to start dusting. Let's begin with shelves!");
}

console.log("\nDusting blinds...");
blindDusted = true;

console.log("Final State:");

if (shelvesDusted && furnitureDusted && blindDusted) {
  console.log("Excellent! All dusting tasks are complete.");
} else if (shelvesDusted && furnitureDusted) {
  console.log("Shelves and furniture are dusted. TIme to dust the blinds!");
} else if (shelvesDusted) {
  console.log("shelves are dusted let's move on to furniture");
} else {
  console.log("Time to start dustin. Let's begin with shelves");
}
