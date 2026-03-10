maptilersdk.config.apiKey = mapToken;

const map = new maptilersdk.Map({
  container: "map", // container id
  style: "https://api.maptiler.com/maps/streets-v2/style.json", //eg.,streets-v2-dark
  // else => style: maptilersdk.MapStyle.STREETS,
  center: listing.geometry.coordinates, // starting position [lng, lat]
  zoom: 9, // starting zoom
});

const marker = new maptilersdk.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates) //Listing.geometry.coordinates
  .setPopup(
    new maptilersdk.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.title}</h4><p>Exact Location will be provided after bookings</p>`,
    ),
  )
  .addTo(map);
