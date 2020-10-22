window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function() {
      let pilot = document.querySelector("input[name=pilotName]");
      let coPilot = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let mass = document.querySelector("input[name=cargoMass]");
      if (pilot.value === "" || coPilot.value === "" || fuelLevel.value === "" || mass.value === "") {
         window.alert("All fields required!");
         event.preventDefault();
      } 

      if (!isNaN(pilot.value) || (!isNaN(coPilot.value))) {
         window.alert("Pilot and Co-Pilot names must be Strings!");
         event.preventDefault();
      } 
      
      if (isNaN(fuelLevel.value) || isNaN(mass.value)) {
         window.alert("Fuel Level and Cargo Mass must be Numbers");
         event.preventDefault();
      }
      
   });

});







/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
