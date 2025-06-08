let data;

async function init() {
  let link = "https://data.cityofnewyork.us/resource/uip8-fykc.json";
  let info = await fetch(link);
  data = await info.json();
}

init();

function chartAgeGroup() {
  let a = 0, b = 0, c = 0, d = 0, e = 0;

  for (let i = 0; i < data.length; i++) {
    let person = data[i];
    let age = person.age_group || person.perp_age_group;

    if (age === "<18") {
      a++;
    } else if (age === "18-24") {
      b++;
    } else if (age === "25-44") {
      c++;
    } else if (age === "45-64") {
      d++;
    } else if (age === "65+") {
      e++;
    }
  }

  let chartdata = [
    ["<18", a],
    ["18-24", b],
    ["25-44", c],
    ["45-64", d],
    ["65+", e],
  ];

  let chartType = document.getElementById("chartType").value;
  displayChart(chartdata, "chart", chartType);
}
