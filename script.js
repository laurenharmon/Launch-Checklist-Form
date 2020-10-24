window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function() {
      let pilot = document.querySelector("input[name=pilotName]");
      let coPilot = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let mass = document.querySelector("input[name=cargoMass]");
      let fuelNotReady = document.getElementById("fuelStatus");
      let cargoNotReady = document.getElementById("cargoStatus");
      let launchChange = document.getElementById("launchStatus");
      let faultyList = document.getElementById("faultyItems");


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

      if (pilot.value && coPilot.value) {
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready for launch.`;
         document.getElementById("copilotStatus").innerHTML = `Co-pilot ${coPilot.value} is ready for launch.`;
      }

      if (fuelLevel.value < 10000) {
         faultyList.style.visibility = "visible";
         fuelNotReady.innerHTML = `There is not enough fuel for the journey.`;
         launchChange.innerHTML = "Shuttle not ready for launch.";
         launchChange.style.color = "red";  
      } else if (mass.value > 10000) {
         faultyList.style.visibility = "visible";
         cargoNotReady.innerHTML = `There is too much cargo to launch.`;
         launchChange.innerHTML = `Shuttle not ready for launch.`;
         launchChange.style.color = "red";
      } else {
         launchChange.innerHTML = `Shuttle is Ready for Launch!`;
         launchChange.style.color = "green";
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
