let starChart = document.getElementById("starChart").getContext("2d");

new Chart(starChart, {
    type: 'horizontalBar',
    data: {
        labels: ["5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star"],
        datasets: [{
            label: '% of stars',
            data: [30.6, 40.2, 22.6, 4.5, 2.1],
            backgroundColor: 
                'rgba(0, 181, 204, 1)'
            ,
            borderColor: 
                'rgba(0, 181, 204, 1)'
            ,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});