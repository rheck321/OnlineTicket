
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
// alert("eric")

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})


// const activecount = 125; // You can fetch this from a database or API
// document.getElementById('activecount').textContent = activecount;

// const suspendcount = 125; // You can fetch this from a database or API
// document.getElementById('suspendcount').textContent = suspendcount;

// const closedcount = 125; // You can fetch this from a database or API
// document.getElementById('closedcount').textContent = closedcount;

let allData = []; 
var filtered = ""

let tstdata = []
// Load data from external JSON file
fetch("tickets.json")
    // alert("tickets.json")
    .then(response => response.json())
    .then(data => {
      // json table name  "nftlist" from json file
      allData = data.nftlist;

      // // count active tickets
      // let activecount = 0
      // filtered = allData.filter(test => test.state.toLowerCase() == "processing")
      // activecount = filtered.length
      // document.getElementById('activecount').textContent = activecount;

      // // count active tickets
      // let suspendcount = 0
      // filtered = allData.filter(test => test.state.toLowerCase() == "suspend")
      // suspendcount = filtered.length
      // document.getElementById('suspendcount').textContent = suspendcount;

      // // count closed tickets
      //  let closedcount = 0     
      // filtered = allData.filter(test => test.state.toLowerCase() == "finished")
      // closedcount = filtered.length
      // document.getElementById('closedcount').textContent = closedcount;

      // update tickets count per region and status

      filtered = allData.filter(filterarea => filterarea.area.toLowerCase() == "cebu" && filterarea.state.toLowerCase()== "processing")
      document.getElementById('cebuactive').textContent = filtered.length;

      filtered = allData.filter(filterarea => filterarea.area.toLowerCase() == "cebu" && filterarea.state.toLowerCase()== "suspend")
      document.getElementById('cebususpend').textContent = filtered.length;

      filtered = allData.filter(filterarea => filterarea.area.toLowerCase() == "cebu" && filterarea.state.toLowerCase()== "finished")
      document.getElementById('cebuclosed').textContent = filtered.length;

      filtered = allData.filter(filterarea => filterarea.area.toLowerCase() == "bohol" && filterarea.state.toLowerCase()== "processing")
      document.getElementById('boholactive').textContent = filtered.length;

      filtered = allData.filter(filterarea => filterarea.area.toLowerCase() == "bohol" && filterarea.state.toLowerCase()== "suspend")
      document.getElementById('boholsuspend').textContent = filtered.length;

      filtered = allData.filter(filterarea => filterarea.area.toLowerCase() == "bohol" && filterarea.state.toLowerCase()== "finished")
      document.getElementById('boholclosed').textContent = filtered.length;

      filtered = allData.filter(filterarea => filterarea.area.toLowerCase() == "leyte" && filterarea.state.toLowerCase()== "processing")
      document.getElementById('leyteactive').textContent = filtered.length;

      filtered = allData.filter(filterarea => filterarea.area.toLowerCase() == "leyte" && filterarea.state.toLowerCase()== "suspend")
      document.getElementById('leytesuspend').textContent = filtered.length;

      filtered = allData.filter(filterarea => filterarea.area.toLowerCase() == "leyte" && filterarea.state.toLowerCase()== "finished")
      document.getElementById('leyteclosed').textContent = filtered.length;
    
      filtered = allData.filter(filterarea => filterarea.area.toLowerCase() == "negros" && filterarea.state.toLowerCase()== "processing")
      document.getElementById('negrosactive').textContent = filtered.length;

      filtered = allData.filter(filterarea => filterarea.area.toLowerCase() == "negros" && filterarea.state.toLowerCase()== "suspend")
      document.getElementById('negrossuspend').textContent = filtered.length;

      filtered = allData.filter(filterarea => filterarea.area.toLowerCase() == "negros" && filterarea.state.toLowerCase()== "finished")
      document.getElementById('negrosclosed').textContent = filtered.length;

      filtered = allData.filter(filterarea => filterarea.area.toLowerCase() == "panay" && filterarea.state.toLowerCase()== "processing")
      document.getElementById('panayactive').textContent = filtered.length;

      filtered = allData.filter(filterarea => filterarea.area.toLowerCase() == "panay" && filterarea.state.toLowerCase()== "suspend")
      document.getElementById('panaysuspend').textContent = filtered.length;

      filtered = allData.filter(filterarea => filterarea.area.toLowerCase() == "panay" && filterarea.state.toLowerCase()== "finished")
      document.getElementById('panayclosed').textContent = filtered.length;

      filtered = allData.filter(filterarea => filterarea.area.toLowerCase() == "samar" && filterarea.state.toLowerCase()== "processing")
      document.getElementById('samaractive').textContent = filtered.length;

      filtered = allData.filter(filterarea => filterarea.area.toLowerCase() == "samar" && filterarea.state.toLowerCase()== "suspend")
      document.getElementById('samarsuspend').textContent = filtered.length;

      filtered = allData.filter(filterarea => filterarea.area.toLowerCase() == "samar" && filterarea.state.toLowerCase()== "finished")
      document.getElementById('samarclosed').textContent = filtered.length;

      filtered = allData.filter(filterarea => filterarea.state.toLowerCase()== "finished")
      document.getElementById('totalclosed').textContent = filtered.length;

      filtered = allData.filter(filterarea => filterarea.state.toLowerCase()== "suspend")
      document.getElementById('totalsuspend').textContent = filtered.length;

      filtered = allData.filter(filterarea => filterarea.state.toLowerCase()== "processing")
      document.getElementById('totalactive').textContent = filtered.length;
      // alert(filtered.length)
    renderTable(allData);
    })
    .catch(error => console.error("Error loading JSON:", error));
    
console.log(allData)

// const area_selected = document.getElementById("filter_area").value.toLowerCase();
// alert(area_selected)
tstdata = allData.filter(tickets => tickets.state.toLowerCase().includes(area_selected))
// console.log(tstdata)  
// alert(tstdata)

  // const filteredstate = allData.filter(nftlist => nftlist.state.toLowerCase == "processing")
  // alert(filteredstate)
  // document.getElementById('activecount').textContent = filteredstate;

// alert(allData)

// let activecount = 0;
// let suspendcount = 0;
// let closedcount = 0;

// allData.forEach(tickets => {
//   alert(tickets.state)

//   if (tickets.state.toLowerCase == "active") {
//     activecount++
//   }
//     if (tickets.state.toLowerCase == "suspend") {
//     suspendcount++
//   }
//     if (tickets.state.toLowerCase == "processing") {
//     closedcount++
//   }
// });

// document.getElementById('activecount').textContent = activecount;
// document.getElementById('suspendcount').textContent = suspendcount;
// document.getElementById('closedcount').textContent = closedcount;

// Render function
function renderTable(data) {
    const tableBody = document.querySelector("#ticketsTable tbody");
    tableBody.innerHTML = ""; // clear old data

    data.forEach(tickets => {

    const row = document.createElement("tr");

    const ticket = document.createElement("td");
    ticket.textContent = tickets.nft;
    ticket.setAttribute("data-label", "nft");

    const site = document.createElement("td");
    site.textContent = tickets.site;
    site.setAttribute("data-label", "site");

    const area = document.createElement("td");
    area.textContent = tickets.area;
    area.setAttribute("data-label", "area");

    const state = document.createElement("td");
    state.textContent = tickets.state;
    state.setAttribute("data-label", "state");

    const severity = document.createElement("td");
    severity.textContent = tickets.severity;
    severity.setAttribute("data-label", "severity");

    const duration = document.createElement("td");
    duration.textContent = tickets.duration;
    duration.setAttribute("data-label", "duration");

    const remaining = document.createElement("td");
    remaining.textContent = tickets.remaining;
    remaining.setAttribute("data-label", "remaining");

    const alarm = document.createElement("td");
    alarm.textContent = tickets.alarm;
    alarm.setAttribute("data-label", "alarm");

    row.appendChild(ticket);
    row.appendChild(site);
    row.appendChild(area);
    row.appendChild(state);
    row.appendChild(severity);
    row.appendChild(duration);
    row.appendChild(remaining);
    row.appendChild(alarm);

    tableBody.appendChild(row);
    });
}

function filter_table() {
    const area_selected = document.getElementById("filter_area").value.toLowerCase();
    const state_selected = document.getElementById("filter_state").value.toLowerCase();
    console.log(state_selected);  

    if (area_selected == "all" && state_selected == "all") {
        renderTable(allData);
    } else {
        if (area_selected !== "all" && state_selected == "all") {
        // alert(area_selected +" area_selected not all  state_selected all");
        const filtered = allData.filter(tickets =>
            tickets.area.toLowerCase().includes(area_selected))
        // console.log(filtered)       
        renderTable(filtered);
        }
        if (area_selected == "all" && state_selected !== "all") {
        // alert(area_selected +" area_selected not all  state_selected all");
        const filtered = allData.filter(tickets =>
            tickets.state.toLowerCase().includes(state_selected))            
        renderTable(filtered);

        }
        if (area_selected !== "all" && state_selected !== "all") {
        // alert(area_selected +" area_selected not all  state_selected all");
        const filtered = allData.filter(tickets =>
            tickets.area.toLowerCase().includes(area_selected) && tickets.state.toLowerCase().includes(state_selected))    
        renderTable(filtered);
        }
    }
}
