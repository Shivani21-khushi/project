var timeZone = document.getElementById("timeZone");
var lati = document.getElementById("lati");
var std = document.getElementById("std");
var stdSec = document.getElementById("stdSec");
var dst = document.getElementById("dst");
var dstSec = document.getElementById("dstSec");
var coun = document.getElementById("coun");
var Pcode = document.getElementById("Pcode");
var city = document.getElementById("city");
var long = document.getElementById("long");


var UtimeZone = document.getElementById("UtimeZone");
var Ulati = document.getElementById("Ulati");
var Ustd = document.getElementById("Ustd");
var UstdSec = document.getElementById("UstdSec");
var Udst = document.getElementById("Udst");
var UdstSec = document.getElementById("UdstSec");
var Ucoun = document.getElementById("Ucoun");
var Upcode = document.getElementById("Upcode");
var Ucity = document.getElementById("Ucity");
var Ulong = document.getElementById("Ulong");
var input = document.getElementsByTagName("input")[0];
var button = document.getElementsByTagName("button")[0];


async function getLocation() {
   navigator.geolocation.getCurrentPosition((success) => {
    let { latitude, longitude } = success.coords
    getTimeZone(latitude,longitude);
   })
}

document.addEventListener("DOMContentLoaded", getLocation);

async function getTimeZone(lat, lon) {
    const request = await fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&format=json&apiKey=39256ca7e90a4061bbfdae20dd127ad2`
    );
    const response = await request.json();
    const timeZoneData = response;
    locationData(timeZoneData);
}

async function getUpdatedTimeZone(input) {
    const request = await fetch(
      `https://api.geoapify.com/v1/geocode/search?text=${input}&format=json&apiKey=39256ca7e90a4061bbfdae20dd127ad2`
    );
    const response = await request.json();
    const timeZoneData = response;
    getSearchData(timeZoneData);
}

function getAddressTimezone() {
  const address = input.value; 
  if (address == "") {
    document.getElementById("errorMsg").style.display = "block";
    document.getElementById("errorMsg").textContent =
      "Please Enter a valid Address!";
    document.getElementById("heading").style.display = "none";
    document.getElementById("newComponent").style.display = "none";
  } else {
    getUpdatedTimeZone(address);
    document.getElementById("errorMsg").style.display = "none";
    document.getElementById("heading").style.display = "block";
    document.getElementById("newComponent").style.display = "block";
  }
}

button.addEventListener("click", getAddressTimezone);


function displayError() {
  document.getElementById("heading").style.display = "none";
  document.getElementById("newComponent").style.display = "none";
  document.getElementById("errorMsg").style.display = "block";
  document.getElementById("errorMsg").textContent =
    "Timezone could not be found!";
}

function locationData(data) {
  timeZone.textContent = data.results[0].timezone.name;
  lati.textContent = data.results[0].lat;
  std.textContent = data.results[0].timezone.offset_STD;
  stdSec.textContent = data.results[0].timezone.offset_STD_seconds;
  dst.textContent = data.results[0].timezone.offset_DST;
  dstSec.textContent = data.results[0].timezone.offset_DST_seconds;
  coun.textContent = data.results[0].country;
  Pcode.textContent = data.results[0].postcode;
  city.textContent = data.results[0].city;
  long.textContent = data.results[0].lon;
}

function getSearchData(data) {
  UtimeZone.textContent = data.results[0].timezone.name;
  Ulati.textContent = data.results[0].lat;
  Ustd.textContent = data.results[0].timezone.offset_STD;
  UstdSec.textContent = data.results[0].timezone.offset_STD_seconds;
  Udst.textContent = data.results[0].timezone.offset_DST;
  UdstSec.textContent = data.results[0].timezone.offset_DST_seconds;
  Ucoun.textContent = data.results[0].country;
  Upcode.textContent = data.results[0].postcode;
  Ucity.textContent = data.results[0].city;
  Ulong.textContent = data.results[0].lon;
}