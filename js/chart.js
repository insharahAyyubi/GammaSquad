var xValues=[]
var yValues=[]
transactions.forEach((transaction)=>
transaction.type ===0 && xValues.push(transaction.text));
transactions.forEach((transaction)=>
transaction.type ===0 && yValues.push(transaction.amount)
);

console.log(xValues)

// var xValues = ["Trips & Recreation", "Food & Drinks", "Shopping", "Rent", "Transportation", "Vehicle", "Life & Entertainment", "Communication & PC", "Groceries", "Investment", "Others"];

// var yValues = [0, 100,1 ,0 ,200 ,0 ,0 ,0 ,0 ,0];

var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Expense Structure"
    }
  }
});