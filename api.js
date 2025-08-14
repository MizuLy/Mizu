fetch(
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Phnom%20Penh%2C%2012%2C%20KH?unitGroup=us&key=76W9GALFX62WUF2WCWSRX4MPU&contentType=json"
)
  .then((response) => response.json())
  .then((weather) => {
    document.getElementById("location").innerHTML = weather.resolvedAddress;

    const condition = weather.days[0].conditions.split(", ")[0];

    if (condition === "Rain") {
      document.getElementById("condition").innerHTML = "🌧️";
    } else if (condition === "Partially cloudy") {
      document.getElementById("condition").innerHTML = "☁️";
    } else {
      document.getElementById("condition").innerHTML = "☀️";
    }

    document.getElementById("date").innerHTML = weather.days[0].datetime;
    document.getElementById("temp").innerHTML =
      Math.round(((weather.days[0].temp - 32) * 5) / 9) + "°C";
  })

  .catch((error) => {
    console.error("Error:", error);
    console.log("Error:", error);
    document.getElementById("location").innerHTML = "Unable to locate";
    document.getElementById("condition").innerHTML = "--/--/----";
    document.getElementById("date").innerHTML = "❌";
    document.getElementById("temp").innerHTML = "...°C";
  });
