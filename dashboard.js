var label_area = [];
var label_status = [];

var area_count = [];
var status_count = [];
var hourly_count = [];

var number_sla = 0;
var number_of_not_sla = 0;
var number_of_tickets_bohol = 0;
var number_of_tickets_cebu = 0;
var number_of_tickets_leyte = 0;
var number_of_tickets_negros = 0;
var number_of_tickets_panay = 0;
var number_of_tickets_samar = 0;

readJson();

function readJson() {
    let allData = []; 
    let number_sla = 0;
    let number_of_not_sla = 0;

    label_area = ['Bohol','Cebu','Leyte','Negros','Panay','Samar'];
    label_status = ['Active','Suspended','Closed']

    // Load data from external JSON file
    fetch("tickets.json")
    // alert("tickets.json")
    .then(response => response.json())
    .then(data => {
        // json table name  "nftlist" from json file
        allData = data.nftlist;

        area_count = [
            allData.filter(filterarea => filterarea.area.toLowerCase() == "bohol").length,
            allData.filter(filterarea => filterarea.area.toLowerCase() == "cebu").length,
            allData.filter(filterarea => filterarea.area.toLowerCase() == "leyte").length,
            allData.filter(filterarea => filterarea.area.toLowerCase() == "negros").length,
            allData.filter(filterarea => filterarea.area.toLowerCase() == "panay").length,
            allData.filter(filterarea => filterarea.area.toLowerCase() == "samar").length
        ];

        status_count = [
            allData.filter(filterarea => filterarea.state.toLowerCase()== "processing").length,
            allData.filter(filterarea => filterarea.state.toLowerCase()== "suspend").length,
            allData.filter(filterarea => filterarea.state.toLowerCase()== "finished").length
        ];

        document.getElementById('tickets_bohol').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "bohol").length
        document.getElementById('tickets_cebu').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "cebu").length
        document.getElementById('tickets_leyte').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "leyte").length
        document.getElementById('tickets_negros').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "negros").length
        document.getElementById('tickets_panay').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "panay").length
        document.getElementById('tickets_samar').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "samar").length

        document.getElementById('bohol_00_03').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "bohol" && filterarea.duration > 0 && filterarea.duration < 3.1).length
        document.getElementById('bohol_03_05').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "bohol" && (filterarea.duration > 2.9 && filterarea.duration < 5.1)).length
        document.getElementById('bohol_other').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "bohol" && filterarea.duration == "-").length
        document.getElementById('bohol_sla').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "bohol" && (filterarea.duration > 7.9 || filterarea.duration < 0)).length

        document.getElementById('cebu_00_03').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "cebu" && (filterarea.duration > 0 && filterarea.duration < 3.1)).length
        document.getElementById('cebu_03_05').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "cebu" && (filterarea.duration > 2.9 && filterarea.duration < 5.1)).length
        document.getElementById('cebu_other').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "cebu" && filterarea.duration == "-").length
        document.getElementById('cebu_sla').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "cebu" && (filterarea.duration > 7.9 || filterarea.duration < 0)).length

        document.getElementById('leyte_00_03').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "leyte" && filterarea.duration > 0 && filterarea.duration < 3.1).length
        document.getElementById('leyte_03_05').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "leyte" && (filterarea.duration > 2.9 && filterarea.duration < 5.1)).length
        document.getElementById('leyte_other').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "leyte" && filterarea.duration == "-").length
        document.getElementById('leyte_sla').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "leyte" && (filterarea.duration > 7.9 || filterarea.duration < 0)).length

        document.getElementById('negros_00_03').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "negros" && filterarea.duration > 0 && filterarea.duration < 3.1).length
        document.getElementById('negros_03_05').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "negros" && (filterarea.duration > 2.9 && filterarea.duration < 5.1)).length
        document.getElementById('negros_other').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "negros" && filterarea.duration == "-").length
        document.getElementById('negros_sla').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "negros" && (filterarea.duration > 7.9 || filterarea.duration < 0)).length

        document.getElementById('panay_00_03').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "panay" && filterarea.duration > 0 && filterarea.duration < 3.1).length
        document.getElementById('panay_03_05').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "panay" && (filterarea.duration > 2.9 && filterarea.duration < 5.1)).length
        document.getElementById('panay_other').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "panay" && filterarea.duration == "-").length
        document.getElementById('panay_sla').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "panay" && (filterarea.duration > 7.9 || filterarea.duration < 0)).length

        document.getElementById('samar_00_03').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "samar" && filterarea.duration > 0 && filterarea.duration < 3.1).length
        document.getElementById('samar_03_05').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "samar" && (filterarea.duration > 2.9 && filterarea.duration < 5.1)).length
        document.getElementById('samar_other').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "samar" && filterarea.duration == "-").length
        document.getElementById('samar_sla').textContent = allData.filter(filterarea => filterarea.area.toLowerCase() == "samar" && (filterarea.duration > 7.9 || filterarea.duration < 0)).length

        hour_00 = allData.filter(filterarea => filterarea.hour == "00").length

        hourly_count = [
            allData.filter(filterarea => filterarea.hour == "0").length,
            allData.filter(filterarea => filterarea.hour == "1").length,
            allData.filter(filterarea => filterarea.hour == "2").length,
            allData.filter(filterarea => filterarea.hour == "3").length,
            allData.filter(filterarea => filterarea.hour == "4").length,
            allData.filter(filterarea => filterarea.hour == "5").length,
            allData.filter(filterarea => filterarea.hour == "6").length,
            allData.filter(filterarea => filterarea.hour == "7").length,
            allData.filter(filterarea => filterarea.hour == "8").length,
            allData.filter(filterarea => filterarea.hour == "9").length,
            allData.filter(filterarea => filterarea.hour == "10").length,
            allData.filter(filterarea => filterarea.hour == "11").length,
            allData.filter(filterarea => filterarea.hour == "12").length,
            allData.filter(filterarea => filterarea.hour == "13").length,
            allData.filter(filterarea => filterarea.hour == "14").length,
            allData.filter(filterarea => filterarea.hour == "15").length,
            allData.filter(filterarea => filterarea.hour == "16").length,
            allData.filter(filterarea => filterarea.hour == "17").length,
            allData.filter(filterarea => filterarea.hour == "18").length,
            allData.filter(filterarea => filterarea.hour == "19").length,
            allData.filter(filterarea => filterarea.hour == "20").length,
            allData.filter(filterarea => filterarea.hour == "21").length,
            allData.filter(filterarea => filterarea.hour == "22").length,
            allData.filter(filterarea => filterarea.hour == "23").length
        ];
        renderChart();
    })
    .catch(error => console.error("Error loading JSON:", error))
    // return(area_list);
}

function makeChart(ctx, cfg) {
    return new Chart(ctx, cfg);
}

function renderChart() {
    // Line chart
    const lineCtx = document.getElementById('lineChart').getContext('2d');
    makeChart(lineCtx, {
            type: 'line',
            data: {
            labels: ['0000H','0100H','0200H','0300H','0400H','0500H','0600H','0700H','0800H','0900H','1000H','1100H','1200H','1300H','1400H','1500H'
                ,'1600H','1700H','1800H','1900H','2000H','2100H','2200H','2300H'],
            datasets: [{ label: 'Hourly Tickets', data: hourly_count, backgroundColor: 'rgba(255, 99, 132, 0.2)',borderColor: 'rgba(156, 99, 255, 1)',borderWidth: 1, fill: false }]
        },
            options: { responsive: true, maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        align: 'center',
                        labels: {font: {family: 'Arial',size: 10,style: 'normal',weight: 'bold'}}

                }
            } }

    });

    // Bar chart
    const barCtx = document.getElementById('barChart').getContext('2d');
    makeChart(barCtx, {
            type: 'bar',
            data: {
            labels: label_area,
            datasets: [{ label: 'NFT Tickets', data: area_count, backgroundColor: 'rgba(233, 11, 59, 0.96)',borderColor: 'rgba(88, 7, 229, 1)'}]
        },
            options: { responsive: true, maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        align: 'center',
                        labels: {font: {family: 'Arial',size: 10,style: 'normal',weight: 'bold'}}

                }
            } }
    });


    // Pie chart
    const pieCtx = document.getElementById('pieChart').getContext('2d');
    makeChart(pieCtx, {
            type: 'pie',
            data: {
            labels: label_status,
            datasets: [{ data: status_count,borderWidth:1 }]
        },
            options: { responsive: true, maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'left',
                        align: 'center',
                        // labels: {font: {family: 'Arial',size: 15,style: 'normal',color: 'black'}}
                        labels: {font: {family: 'Calibri',size: 15,style: 'normal',weight: 'bold'}}

                }
            } 
        }
    });


    // Doughnut chart
    const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
    makeChart(doughnutCtx, {
            type: 'doughnut',
            data: {
            labels: label_status,
            datasets: [{ data: status_count }]
        },
            options: { responsive: true, maintainAspectRatio: false }
    });


    // Mixed chart
    const mixedCtx = document.getElementById('mixedChart').getContext('2d');
    makeChart(mixedCtx, {
            type: 'bar',
            data: {
            labels: ['Mon','Tue','Wed','Thu','Fri'],
            datasets: [
                { type:'bar', label:'Visitors', data:[120,150,170,140,180] },
                { type:'line', label:'Revenue', data:[200,250,300,260,320], tension:0.3 }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
}
