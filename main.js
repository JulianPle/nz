let stop_lat = -44.616667;
let stop_lng = 167.866667;
let map = L.map('map').setView([stop_lat, stop_lng], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([stop_lat, stop_lng]).addTo(map)
    .bindPopup('Milford Sound')
    .openPopup();