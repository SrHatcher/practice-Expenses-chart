const ctx = document.getElementById('myChart');
const date = new Date()

// Chart.register(ChartDataLabels)
Chart.defaults.plugins.legend.display = false;
Chart.defaults.color = 'hsl(28, 10%, 53%)';
Chart.defaults.font.family = "'DM Sans', sans-serif"
Chart.defaults.font.size = '13'

const colors = data.map((value, index)=>{
    if(index === (date.getDay() - 1)){
        return 'hsl(186, 34%, 60%)'
    }else{
        return 'hsl(10, 79%, 65%)'
    }
})

const hoverColors = data.map((value, index)=>{
    if(index === (date.getDay() - 1)){
        return 'hsla(186, 65%, 73%, 0.925)'
    }else{
        return 'hsla(10, 79%, 65%, 0.75)'
    }
})

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: data.map(value=>value.day),
        datasets: [{
            label: '',
            data: data.map(value=>value.amount),
            borderWidth: 0,
            borderRadius: 5,
            borderSkipped: false,
            backgroundColor: colors,
            hoverBackgroundColor: hoverColors
        }]
    },
    options: {
        plugins: {
            tooltip: {
                yAlign: 'bottom',
                titleMarginBottom: -3,
                callbacks:{
                    title: function(context){
                        const label = data.find(value=>value.day==context[0].label)
                        return `$${label.amount}`
                    },
                    label: ((tooltipItem, data)=>{
                        //console.log(tooltipItem)
                        return ''
                    })
                },
            }
        },
        onHover: (event, charElement)=>{
            if(charElement.length == 1){
                event.native.target.style.cursor = 'pointer'
            }else{
                event.native.target.style.cursor = 'default'
            }
        },
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