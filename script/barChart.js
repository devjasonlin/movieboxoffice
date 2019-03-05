let boxOffice = document.getElementById("boxOfficeBarChart").getContext("2d");

new Chart(boxOffice, {
    type: 'bar',
    data: {
        labels: ["20 Feb", "19 Feb", "18 Feb", "17 Feb", "16 Feb"],
        datasets: [{
            label: 'box office',
            data: [1882.82, 11100, 9864.98, 19000, 23100],
            // data: [23100, 19000, 9864.98, 11100, 1882.82],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});