////////product
$(document).ready(function () {
  $(".pgwSlider").pgwSlider();
});
////////////////nav

let btnContainer = document.getElementById("myNavbar");
let btns = btnContainer.getElementsByClassName("smooth-scroll");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/////////map
const mapWrapper = document.getElementById("google_map");
const map = new google.maps.Map(mapWrapper, {
  center: { lat: 25.007653, lng: 121.487424 },
  zoom: 17,
  mapId: "d73178ae6a38a012",
});
new google.maps.Marker({
  position: { lat: 25.007653, lng: 121.487424 },
  map: map,
  icon: "../img/marker.png",
});
