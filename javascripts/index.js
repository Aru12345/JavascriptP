const southWest = L.latLng(-90, -180); // Southwest corner of the bounding box (entire world)
const northEast = L.latLng(90, 180); // Northeast corner of the bounding box (entire world)
const bounds = L.latLngBounds(southWest, northEast); // Create the bounds object

const map = L.map("map", {
  minZoom: 2,
  maxBounds: bounds, // Set the maxBounds option to the bounds object
  maxBoundsViscosity: 1.0,
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

map.fitBounds(bounds); // Fit the initial view to the bounds

// Added a click event listener to update the view when the user clicks on the map
map.addEventListener("click", function (e) {
  const { lat, lng } = e.latlng;
  map.setView([lat, lng], map.getZoom()); // Set the view to the clicked location
});

map.on("click", function (mapEvent) {
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng]).addTo(map).bindPopup("--").openPopup();
});
