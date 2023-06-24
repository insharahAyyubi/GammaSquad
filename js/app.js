const savings = document.getElementById('savings');
const expenses = document.getElementById('expenses');
const remaining = document.getElementById('remaining');
const amount = document.getElementById('amount');

const generateID = () => Math.floor(Math.random() * 10000);


const localStorageTransactions = JSON.parse(
    localStorage.getItem("transactions")
);
let transactions =
    localStorageTransactions !== null ? localStorageTransactions : [];

function updateLocaleStorage() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

console.log(transactions)

const list = document.getElementById('list');

// Add transactions to DOM list
function addTransactionDOM(transaction) {
    // Get sign
    const sign = transaction.amount < 0 ? '-' : '+';
    const item = document.createElement('div');
    // Add class based on value
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
    item.innerHTML = ` <div class="list-tile">
          <div class="avatar">
            <i class="fas fa-user"></i>
          </div>
          <div class="title">${transaction.category}</div>
          <div class="trailing">${transaction.amount}</div>
          <button onclick="deleteTransaction(${transaction.id})" class="delete"><i class="fas fa-trash" style="height" ></i></button>
          <button class="delete"><i class="fa-regular fa-pen-to-square"></i></button>
    </div> `;
    list.appendChild(item);
}

const deleteTransaction = (id) => {
    transactions = transactions.filter(transaction => transaction.id !== id);
    updateChanges()
    init();
}

// Init app
function init() {
    list.innerHTML = '';
    // updateChanges()
    updateLocaleStorage();
    transactions.forEach(addTransactionDOM);
}

init();



const updateChanges = () => {
    let total = 0;
    let expense = 0;
    let saving = 0;
    transactions.forEach(transaction => {
        // total+=transaction.amount;
        if (transaction.type === 0) {
            expense += transaction.amount;
        }
        else {
            saving += transaction.amount;
        }
        console.log(expenses)
    });
    savings.innerHTML = `$${saving}`;
    expenses.innerHTML = `$${expense}`;
    remaining.innerHTML = `$${saving - expense}`;
    updateLocaleStorage();
}

updateChanges()

// Function to update the dropdown options based on the selected radio button
function updateDropdownOptions() {
    var categoryType = document.querySelector('input[name="categoryType"]:checked').value;
    var categorySelect = document.getElementById('category');

    // Clear existing options
    categorySelect.innerHTML = '<option value="">Select Category</option>';

    // Add new options based on the selected category type
    if (categoryType === 'expense') {
        for (var key in Expenses) {
            if (Expenses.hasOwnProperty(key)) {
                categorySelect.innerHTML += '<option value="' + key + '">' + Expenses[key] + '</option>';
            }
        }
    } else if (categoryType === 'income') {
        for (var key in Incomes) {
            if (Incomes.hasOwnProperty(key)) {
                categorySelect.innerHTML += '<option value="' + key + '">' + Incomes[key] + '</option>';
            }
        }
    }
}

// Add event listener to the radio buttons
var expenseRadio = document.getElementById('expenseRadio');
var incomeRadio = document.getElementById('incomeRadio');

expenseRadio.addEventListener('change', updateDropdownOptions);
incomeRadio.addEventListener('change', updateDropdownOptions);



// const handlesave=()=>{
//     console.log("yes")
//     console.log(amount.value)
// }

document.addEventListener('DOMContentLoaded', function() {
    // Create variables for all the fields
    var categoryTypeRadios = document.querySelectorAll('input[name="categoryType"]');
    var categorySelect = document.getElementById('category');
    var amountInput = document.getElementById('amount');
    var noteInput = document.getElementById('note');
  
    // Function to update the dropdown options based on the selected category type
    function updateDropdownOptions() {
      var categoryType = document.querySelector('input[name="categoryType"]:checked').value;
  
      // Clear existing options
      categorySelect.innerHTML = '';
  
      // Add new options based on the selected category type
      if (categoryType === 'expense') {
        for (var key in Expenses) {
          if (Expenses.hasOwnProperty(key)) {
            var option = document.createElement('option');
            option.value = key;
            option.textContent = Expenses[key];
            categorySelect.appendChild(option);
          }
        }
      } else if (categoryType === 'income') {
        for (var key in Incomes) {
          if (Incomes.hasOwnProperty(key)) {
            var option = document.createElement('option');
            option.value = key;
            option.textContent = Incomes[key];
            categorySelect.appendChild(option);
          }
        }
      }
    }
  
    // Add event listener to the radio buttons
    for (var i = 0; i < categoryTypeRadios.length; i++) {
      categoryTypeRadios[i].addEventListener('change', updateDropdownOptions);
    }
  
    // Function to handle form submission
    function handleSubmit(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get the values from the fields
      var categoryType = document.querySelector('input[name="categoryType"]:checked').value;
      var category = categorySelect.value;
      var amount = parseFloat(amountInput.value);
      var note = noteInput.value;
  
      // Validate the amount field (accepts numbers only)
      if (isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
      }
  
      // Perform further processing or validation as needed
      // ...
  
      // Log the values for testing
      console.log('Category Type:', categoryType);
      console.log('Category:', category);
      console.log('Amount:', amount);
      console.log('Note:', note);
    }
  
    // Add event listener to the form submit button
    var submitButton = document.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', handleSubmit);
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    // Create variables for all the fields
    var categoryTypeRadios = document.querySelectorAll('input[name="categoryType"]');
    var categorySelect = document.getElementById('category');
    var amountInput = document.getElementById('amount');
    var noteInput = document.getElementById('note');
  
    // Function to update the dropdown options based on the selected category type
    function updateDropdownOptions() {
      var categoryType = document.querySelector('input[name="categoryType"]:checked').value;
  
      // Clear existing options
      categorySelect.innerHTML = '';
  
      // Add new options based on the selected category type
      if (categoryType === 'expense') {
        for (var key in Expenses) {
          if (Expenses.hasOwnProperty(key)) {
            var option = document.createElement('option');
            option.value = Expenses[key];
            option.textContent = Expenses[key];
            categorySelect.appendChild(option);
          }
        }
      } else if (categoryType === 'income') {
        for (var key in Incomes) {
          if (Incomes.hasOwnProperty(key)) {
            var option = document.createElement('option');
            option.value = Incomes[key];
            option.textContent = Incomes[key];
            categorySelect.appendChild(option);
          }
        }
      }
    }
  
    // Add event listener to the radio buttons
    for (var i = 0; i < categoryTypeRadios.length; i++) {
      categoryTypeRadios[i].addEventListener('change', updateDropdownOptions);
    }
  
    // Function to handle form submission
    function handleSubmit(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get the values from the fields
      var categoryType = document.querySelector('input[name="categoryType"]:checked').value;
      var category = categorySelect.value;
      var amount = parseFloat(amountInput.value);
      var note = noteInput.value;
  
      // Validate the amount field (accepts numbers only)
      if (isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
      }
  
      // Perform further processing or validation as needed
      // ...
  
      // Log the values for testing
      console.log('Category Type:', categoryType);
      console.log('Category:', category);
      console.log('Amount:', amount);
      console.log('Note:', note);
      categoryType === 'income'? categoryType = 1: categoryType = 0

      transactions.push({id: generateID() ,type:categoryType,category: category,amount: amount})
      console.log(transactions)
      amountInput.value = '';
        noteInput.value = '';
        categorySelect.value = '';
        categoryTypeRadios[0].checked = false;
        categoryTypeRadios[1].checked = false;
      updateLocaleStorage()
      init()
    }

  
    // Add event listener to the form submit button
    var submitButton = document.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', handleSubmit);
  });

  console.log(transactions)