const ctx = document.getElementById('myChart');
Chart.defaults.plugins.legend.display = false

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        datasets: [{
            label: '',
            data: [12, 19, 3, 5, 2, 3, 5],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            x:{
                grid:{
                    display:false
                },
                border: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                grid:{
                    display: false
                },
                display: false
            }
        },
    }
});
