/* //we can write javascript */

document.getElementById("second-heading").innerHTML = "hello twice";
const getDataButton = document.getElementById("get-data");
getDataButton.addEventListener("click", () => {
  console.log("get some data");
  document.getElementById("second-heading").innerHTML = "hello ";

  function displayData(allbeers) {
    document.querySelector("pre").innerHTML = JSON.stringify(allbeers, null, 2);
  }

  fetch("https://api.sampleapis.com/beers/ale")
    .then((data) => data.json())
    .then((beers) => displayData(beers))
    .catch((err) => console.log(err));
});

const alertBtn = document.getElementById("slow-alert-btn");
alertBtn.addEventListener("click", () => alert("hey class we are done!"));
