let data = [];

window.onload = function () {
  fetchData();
  setupDropdownListener();
};

function fetchData() {
  let url = "https://data.cityofnewyork.us/resource/uip8-fykc.json";

  fetch(url)
    .then(response => response.json())
    .then(json => {
      data = json;
      displayData("all"); 
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

function setupDropdownListener() {
  const dropdown = document.getElementById("gender");
  dropdown.addEventListener("change", function () {
    displayData(this.value);
  });
}

function displayData(selectedGender) {
  let output = document.getElementById("output");
  
  let build = "";

  for (let i = 0; i < data.length; i++) {
    let person = data[i];
    if (selectedGender === "all" || person.perp_sex === selectedGender) { 
      build += `<div class="card">`;
      build += `<p><strong>Arrest Date:</strong> ${person.arrest_date}</p>`;
      build += `<p> <strong>Offense Description:</strong> ${person.ofns_desc}</p>`;
      build += `<p><strong>Race:</strong> ${person.perp_race}</p>`;     
      build += `<p><strong>Gender:</strong> ${person.perp_sex}</p>`;
      build += `<p><strong>Age Group:</strong> ${person.age_group}</p>`;
      build += `</div>`;
    }
  }

  output.innerHTML = build;
}
