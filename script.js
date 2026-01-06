const timezones = {
  "USA 🇺🇸": ["America/New_York","America/Chicago","America/Denver","America/Los_Angeles","America/Anchorage","Pacific/Honolulu"],
  "India 🇮🇳": ["Asia/Kolkata"],
  "Pakistan 🇵🇰": ["Asia/Karachi"],
  "Nepal 🇳🇵": ["Asia/Kathmandu"],
  "Sri Lanka 🇱🇰": ["Asia/Colombo"],
  "UAE 🇦🇪": ["Asia/Dubai"],
  "Saudi Arabia 🇸🇦": ["Asia/Riyadh"],
  "Qatar 🇶🇦": ["Asia/Qatar"],
  "Kuwait 🇰🇼": ["Asia/Kuwait"],
  "Oman 🇴🇲": ["Asia/Muscat"],
  "UK 🇬🇧": ["Europe/London"],
  "Germany 🇩🇪": ["Europe/Berlin"],
  "France 🇫🇷": ["Europe/Paris"],
  "Italy 🇮🇹": ["Europe/Rome"],
  "Spain 🇪🇸": ["Europe/Madrid"],
  "Turkey 🇹🇷": ["Europe/Istanbul"],
  "Japan 🇯🇵": ["Asia/Tokyo"],
  "Singapore 🇸🇬": ["Asia/Singapore"],
  "Australia 🇦🇺": ["Australia/Sydney"]
};

function convertTime(){
  const input = document.getElementById("bdTime").value;
  if(!input) return;

  const bd = new Date(input);
  const utc = bd.getTime() - 6*60*60*1000;

  let html = "";

  for(let country in timezones){
    html += `<div class="box"><h3>${country}</h3>`;
    timezones[country].forEach(zone=>{
      const t = new Date(utc).toLocaleString("en-US",{timeZone:zone});
      html += `<p>${zone.split('/')[1]}: ${t}</p>`;
    });
    html += "</div>";
  }

  document.getElementById("results").innerHTML = html;
}
