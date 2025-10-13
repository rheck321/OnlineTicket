
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

      filtered = allData.filter(filterarea => filterarea.area.toLowerCase() == "cebu" && filterarea.state.toLowerCase()== "processing")
      document.getElementById('cebuactive').textContent = filtered.length;

      // alert(filtered.length)
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
      UpdateActiveTable(allData);
      UpdateSuspendTable(allData);
      UpdateClosedTable(allData);
      // UpdateLatestAlarmTable(allData);
    })
    .catch(error => console.error("Error loading JSON:", error));
    
console.log(allData)


// Render function
function UpdateActiveTable(data) {
    // alert('test')
    // update active table
    const tableBody = document.querySelector("#ticketsActiveTable tbody");
    tableBody.innerHTML = ""; // clear old data

    data.forEach(tickets => {

    // alert(tickets.state.toLowerCase())
    if (tickets.state.toLowerCase() == "processing") {
        // alert("processing")
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

    }
  });
}

function UpdateSuspendTable(data) {
    // update suspend table
    const tableBody = document.querySelector("#ticketsSuspendTable tbody");
    tableBody.innerHTML = ""; // clear old data

    data.forEach(tickets => {

    // alert(tickets.state.toLowerCase())
    if (tickets.state.toLowerCase() == "suspend") {
        // alert("processing")
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

    }
  });
}

function UpdateClosedTable(data) {

    // update suspend table
    const tableBody = document.querySelector("#ticketsClosedTable tbody");
    tableBody.innerHTML = ""; // clear old data

    data.forEach(tickets => {

    // alert(tickets.state.toLowerCase())
    if (tickets.state.toLowerCase() == "finished") {
        // alert("processing")
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
    }
  });
}


function UpdateLatestAlarmTable(data) {
    // alert('latest')
    // update suspend table
    const tableBody = document.querySelector("#ticketsLatestTable tbody");
    tableBody.innerHTML = ""; // clear old data

    data.forEach(tickets => {

    // alert(tickets.state.toLowerCase())
    // if (tickets.state.toLowerCase() == "finished") {
        // alert("finished")
        const row = document.createElement("tr");

        const ticket = document.createElement("td");

        ticket.textContent = tickets.nft;
        
        ticket.setAttribute("data-label", "nft");

        const created = document.createElement("td");
        created.textContent = tickets.created;
        created.setAttribute("data-label", "created");

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

        // const duration = document.createElement("td");
        // duration.textContent = tickets.duration;
        // duration.setAttribute("data-label", "duration");

        // const remaining = document.createElement("td");
        // remaining.textContent = tickets.remaining;
        // remaining.setAttribute("data-label", "remaining");

        const alarm = document.createElement("td");
        alarm.textContent = tickets.alarm;
        alarm.setAttribute("data-label", "alarm");

        
        row.appendChild(created);
        row.appendChild(ticket);
        row.appendChild(site);
        row.appendChild(area);
        row.appendChild(state);
        row.appendChild(severity);
        // row.appendChild(duration);
        // row.appendChild(remaining);
        row.appendChild(alarm);

        tableBody.appendChild(row);

    // }
  });
}


