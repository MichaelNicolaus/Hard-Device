function startChat() {
    const chatbox = document.getElementById("chatbox");
    chatbox.style.display = chatbox.style.display === "none" ? "block" : "none";
}

const hospitalData = [
  { name: "RSUP Dr. Cipto Mangunkusumo", city: "Jakarta", website: "http://rscm.co.id" },
  { name: "Dharmais Cancer Hospital", city: "West Jakarta", website: "http://dharmais.co.id" },
  { name: "Primaya Hospital PGI Cikini", city: "Central Jakarta", website: "https://primayahospital.com/rumah-sakit/pgi-cikini/" },
  { name: "Pertamina Central Hospital", city: "South Jakarta", website: "http://www.rspp.co.id/" },
  { name: "Hermina Hospitals (Grha Kedoya)", city: "West Jakarta", website: "https://www.herminahospitals.com" }
];

function showHospitals() {
  document.getElementById('hospitalList').style.display = 'block';
  document.getElementById('fireInfo').style.display = 'none';
  document.getElementById('posyanduInfo').style.display = 'none';
  const ul = document.getElementById('hospitals');
  ul.innerHTML = '';
  hospitalData.forEach(h => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${h.name}</strong> (${h.city}) — <a href="${h.website}" target="_blank">Website</a>`;
    ul.appendChild(li);
  });
}

function showFire() {
  document.getElementById('hospitalList').style.display = 'none';
  document.getElementById('fireInfo').style.display = 'block';
  document.getElementById('posyanduInfo').style.display = 'none';
}

function showPosyandu() {
  document.getElementById('hospitalList').style.display = 'none';
  document.getElementById('fireInfo').style.display = 'none';
  document.getElementById('posyanduInfo').style.display = 'block';
}
