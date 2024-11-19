// Placeholder for charts using Chart.js
const ctx = document.getElementById('performanceChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [{
      label: 'Performance',
      data: [0, 5, 10, 20, 25, 30, 40, 50, 55],
      borderColor: 'rgba(31, 124, 252, 1)',
      borderWidth: 2,
      fill: false,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      }
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: '#444' } }
    }
  }
});
