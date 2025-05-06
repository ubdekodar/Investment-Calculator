
const form = document.getElementById("investmentForm");
const resultDiv = document.getElementById("result");


function calculateInvestment() {
    const amount = parseFloat(document.getElementById("amount").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const years = parseInt(document.getElementById("years").value);
  
    if (isNaN(amount) || isNaN(rate) || isNaN(years)) {
      document.getElementById("result").innerText = "Please enter valid numbers.";
      return;
    }
  
    const futureValue = amount * Math.pow(1 + rate / 100, years);
    document.getElementById("result").innerText =
      "Future Value: $" + futureValue.toFixed(2);
  }
  
function resetForm() {
    document.getElementById("investmentForm").reset();
    document.getElementById("result").innerText = "";
    }

function showResult() {
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
  }

function hideResult() {
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "none";
  }