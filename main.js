let stop_lat = -44.616667;
let stop_lng = 167.866667;
let zoom = 13;
let title = 'Milford Sound';

const STOP = ["Moeraki Boulder", {
    title: "Milford Sound", //key value pair
    user: "julianple",
    lat: -44.616667,
    lng: 167.866667,
    wikipedia: "https://de.wikipedia.org/wiki/Milford_Sound/Piopiotahi"
}, 'Wanaka'];
console.log(STOP);
console.log(STOP[0]);
console.log(STOP[1]);
console.log(STOP[2]);
console.log(STOP.length);

let map = L.map('map').setView([stop_lat, stop_lng], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([stop_lat, stop_lng]).addTo(map)
    .bindPopup(title)
    .openPopup();