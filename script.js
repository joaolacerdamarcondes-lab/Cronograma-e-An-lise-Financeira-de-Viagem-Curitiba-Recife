// Dados da tabela da viagem
const categorias = ['Passagem de avião', 'Hospedagem', 'Alimentação', 'Transporte'];
const valores = [1300, 1000, 500, 150];
const cores = ['#4a69bd', '#6a89cc', '#fa8231', '#20bf6b'];

// Configuração do Gráfico de Barras
const ctxBar = document.getElementById('barChart').getContext('2d');
new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: categorias,
        datasets: [{
            label: 'Valor Final (R$)',
            data: valores,
            backgroundColor: cores,
            borderRadius: 6
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return 'R$ ' + value;
                    }
                }
            }
        }
    }
});

// Configuração do Gráfico de Rosca
const ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
new Chart(ctxDoughnut, {
    type: 'doughnut',
    data: {
        labels: categorias,
        datasets: [{
            data: valores,
            backgroundColor: cores,
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});
