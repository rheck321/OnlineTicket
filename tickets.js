let allData = []; 
var filtered = ""

// Load data from external JSON file
fetch("tickets.json")
    .then(response => response.json())
    .then(data => {
    // json table name  "nftlist"
    allData = data.nftlist;
    renderTable(allData);
    })
    .catch(error => console.error("Error loading JSON:", error));

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
