function generatePlan() {
  let location = document.getElementById("location").value;
  let disaster = document.getElementById("disaster").value;
  let family = document.getElementById("family").value;
  let house = document.getElementById("house").value;

  if (!location || !disaster || !family || !house) {
    alert("Please fill all details!");
    return;
  }

  let plan = "";

  if (disaster === "flood") {
    plan = `
    <b>Flood Alert for ${location}</b><br><br>
    - Move to higher ground immediately<br>
    - Avoid waterlogged areas<br>
    - Carry important documents in waterproof cover<br>
    - Switch off electricity<br>
    - Help all ${family} family members evacuate safely
    `;
  }

  if (disaster === "cyclone") {
    plan = `
    <b>Cyclone Alert for ${location}</b><br><br>
    - Stay indoors away from windows<br>
    - Secure loose objects outside<br>
    - Keep torch, power bank ready<br>
    - Follow government evacuation orders
    `;
  }

  if (disaster === "heatwave") {
    plan = `
    <b>Heat Wave Alert for ${location}</b><br><br>
    - Stay hydrated<br>
    - Avoid outdoor activities during noon<br>
    - Wear light cotton clothes<br>
    - Check elderly and children frequently
    `;
  }

  if (disaster === "earthquake") {
    plan = `
    <b>Earthquake Safety Plan</b><br><br>
    - Drop, Cover, and Hold On<br>
    - Stay away from glass and heavy objects<br>
    - Do not use elevators<br>
    - Move to open area after shaking stops
    `;
  }

  document.getElementById("result").innerHTML = plan;
  document.getElementById("output").classList.remove("d-none");
}
