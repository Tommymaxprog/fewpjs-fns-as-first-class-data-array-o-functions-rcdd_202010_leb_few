function wakeDog(dogName="Byron", dogBreed="poodle") {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  let activity="Wake the "+dogName+" the "+dogBreed;
  return activity; 
}
let name="Xerox";
let breed="Border Collie"
wakeDog(name,breed);
function leashDog(dogName, dogBreed) {
  let activity="Leash ${dogName} the ${dogBreed}";
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return activity;
}
function walkToPark(dogName, dogBreed) {
  let activity="`Walk to the park with ${dogName} the ${dogBreed}";
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return activity;
}
function throwFrisbee(dogName, dogBreed) {
  let activity="Throw the frisbee for ${dogName} the ${dogBreed}";
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return activity;
}
function walkHome(dogName, dogBreed) {
  let activity="Walk home with ${dogName} the ${dogBreed}";
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return activity;
}
function unleashDog(dogName, dogBreed) {
  let activity="Unleash ${dogName} the ${dogBreed}";
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return activity;
}
let routine=[wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleasDog];
function exerciseDog(dogName, dogBreed){
  
  for (const functions of routine)
  {routine[functions](dogName, dogBreed);
  return(routine[functions]);
  }
  
}