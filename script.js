// Sample portfolio data
let portfolio = [
  { symbol: 'AAPL', price: 150.00, shares: 10 },
  { symbol: 'GOOGL', price: 2800.00, shares: 5 },
  { symbol: 'TSLA', price: 700.00, shares: 8 },
];

// Render the portfolio table
function renderTable() {
  const tableBody = document.getElementById('holdingsTable');
  tableBody.innerHTML = ''; // Clear previous content

  portfolio.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.symbol}</td>
      <td>${item.price.toFixed(2)}</td>
      <td>${item.shares}</td>
      <td>${(item.price * item.shares).toFixed(2)}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Fetch and render performance data on the chart
function fetchPerformanceData() {
  // Simulated data
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  const values = [100, 120, 140, 180, 200];
  renderPerformanceChart(labels, values);
}

function renderPerformanceChart(labels, values) {
  const ctx = document.getElementById('performanceChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Portfolio Performance',
        data: values,
        borderColor: '#1f7cfc',
        borderWidth: 2,
      }],
    },
    options: {
      responsive: true,
      scales: {
        x: { grid: { display: false } },
        y: { grid: { color: '#444' } },
      },
    },
  });
}

// Modal functionality
const modal = document.getElementById('editModal');
const closeModal = document.querySelector('.close-btn');
const editForm = document.getElementById('editForm');

// Open modal
document.querySelector('.add-btn').addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Save new portfolio data
editForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const symbol = document.getElementById('symbol').value;
  const price = parseFloat(document.getElementById('price').value);
  const shares = parseInt(document.getElementById('shares').value);

  portfolio.push({ symbol, price, shares });
  renderTable(); // Update the table
  modal.style.display = 'none'; // Close modal
});

// Initialize
renderTable();
fetchPerformanceData();
