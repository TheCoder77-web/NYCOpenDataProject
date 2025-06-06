let data;

async function init() {
  let link = "https://data.cityofnewyork.us/resource/uip8-fykc.json";
  let info = await fetch(link);
  data = await info.json();
}

init();

function chartGender() {
  let M = 0, F = 0;
  for (let i = 0; i < data.length; i++) {
    let person = data[i];
    if (person.perp_sex === "M") {
      M++;
    } else if (person.perp_sex === "F") {
      F++;
    }
  }

  let chartdata = [
    ["Male", M],
    ["Female", F]
  ];

  let chartType = document.getElementById("chartType").value;
  displayChart(chartdata, "chart", chartType);
}
