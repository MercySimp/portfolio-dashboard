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

// Modal functionality
const modal = document.getElementById('editModal');
const closeModal = document.querySelector('.close-btn');
const editForm = document.getElementById('editForm');

// Open modal when "Edit Portfolio" button is clicked
document.querySelector('.add-btn').addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Handle form submission
editForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const symbol = document.getElementById('symbol').value;
  const price = parseFloat(document.getElementById('price').value);
  const shares = parseInt(document.getElementById('shares').value);

  // Add the new data (or update an existing row)
  console.log(`Updated Portfolio: Symbol: ${symbol}, Price: ${price}, Shares: ${shares}`);

  // Close the modal
  modal.style.display = 'none';
});

// Save to local storage
function saveToLocalStorage(data) {
  localStorage.setItem('portfolio', JSON.stringify(data));
}

// Load data from local storage
function loadFromLocalStorage() {
  const data = localStorage.getItem('portfolio');
  return data ? JSON.parse(data) : [];
}

// Example usage
let portfolio = loadFromLocalStorage();
portfolio.push({ symbol: 'AAPL', price: 150.00, shares: 10 });
saveToLocalStorage(portfolio);
