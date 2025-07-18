//Copenhagen
function updateTime() {
  let copenhagenElement = document.querySelector("#copenhagen");
  if (copenhagenElement) {
    let copenhagenDateElement = copenhagenElement.querySelector(".date");
    let copenhagenTimeElement = copenhagenElement.querySelector(".time");
    let copenhagenTime = moment().tz("Europe/Copenhagen");

    copenhagenDateElement.innerHTML = copenhagenTime.format("MMMM Do YYYY");
    copenhagenTimeElement.innerHTML = copenhagenTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //Accra
  let accraElement = document.querySelector("#accra");
  if (accraElement) {
    let accraDateElement = accraElement.querySelector(".date");
    let accraTimeElement = accraElement.querySelector(".time");
    let accraTime = moment().tz("Africa/Accra");

    accraDateElement.innerHTML = accraTime.format("MMMM Do YYYY");
    accraTimeElement.innerHTML = accraTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
