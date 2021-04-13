
function displayPetYouGet (e) {
  let trait = document.querySelector('input[name="personality"]:checked').value;
  let space = document.querySelector('input[name="environment"]:checked').value;
  e.preventDefault ();

  if(trait==="introverted" && space==="indoors") {
    document.getElementById("displayPet").innerHTML="Your preferred pet is a fish";
  } else if(trait==="introverted" && space==="outdoors") {
    document.getElementById("displayPet").innerHTML="Your preferred pet is a cat";
  } else if(trait==="extroverted" && space==="indoors") {
    document.getElementById("displayPet").innerHTML="Your preferred pet is a chihuahua";
  } else {
    document.getElementById("displayPet").innerHTML="Your preferred pet is a German Shepherd";
  }

}
document.addEventListener("submit", displayPetYouGet)